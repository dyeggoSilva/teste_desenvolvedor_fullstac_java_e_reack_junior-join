package com.dytecnology.cardapio.controllers;

import com.dytecnology.cardapio.dtos.request.FoodRequestDto;
import com.dytecnology.cardapio.dtos.response.FoodResponseDto;
import com.dytecnology.cardapio.service.FoodService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("food")
public class FoodController {

    @Autowired
    private FoodService foodService;

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping
    public String addfoods(@RequestBody FoodRequestDto foodRequestDto){
        return foodService.postFoods(foodRequestDto);
    }


    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping
    public Page<FoodResponseDto> getAll(@PageableDefault(size = 6, sort = "titulo") Pageable pageable) {
        return foodService.getAll(pageable);
    }


    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/{id}")
    public Optional<FoodResponseDto> foodById(@PathVariable Long id){
        return foodService.buscarPorId(id);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PutMapping("/{id}")
    public String updateFood(@PathVariable long id, @RequestBody FoodRequestDto foodRequestDto){
        return foodService.atualizar(id,foodRequestDto);
    }
    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @DeleteMapping("/{id}")
    public void deleteFood(@PathVariable Long id){
        foodService.deletar(id);
    }


}
