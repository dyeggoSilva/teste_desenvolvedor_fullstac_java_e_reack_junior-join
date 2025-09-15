package com.dytecnology.cardapio.service;

import com.dytecnology.cardapio.dtos.request.FoodRequestDto;
import com.dytecnology.cardapio.dtos.response.FoodResponseDto;
import com.dytecnology.cardapio.entities.Food;
import com.dytecnology.cardapio.repositorys.FoodRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;


import java.util.List;
import java.util.Optional;

@Service
public class FoodService {

    @Autowired
    private FoodRepository foodRepository;

    public String postFoods(FoodRequestDto foodRequestDto){

        try {
            Food foodData = new Food(foodRequestDto);
            foodRepository.save(foodData);
            return"prato cadastrado";
        } catch (Exception e) {
            throw new RuntimeException(e);
        }

    }

    public Page<FoodResponseDto> getAll(Pageable pageable) {
        return foodRepository.findAll(pageable)
                .map(FoodResponseDto::new);
    }

    public Optional<FoodResponseDto> buscarPorId(Long id) {


        try {
            return foodRepository.findById(id).map(food -> new FoodResponseDto(
                    food.getId(),
                    food.getTitulo(),
                    food.getImg(),
                    food.getPreco()));

        } catch (Exception e) {
            throw new RuntimeException(e);
        }

    }

    public String atualizar(Long id, FoodRequestDto data) {
        Food existente = foodRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Food não encontrado com id: " + id));

        Food atualizado = existente.updateFromDto(data);
        foodRepository.save(atualizado);

        return "Food atualizado com sucesso!";
    }

    public void deletar(Long id) {
        foodRepository.deleteById(id);
    }
}
