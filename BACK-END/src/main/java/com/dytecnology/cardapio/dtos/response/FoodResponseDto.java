package com.dytecnology.cardapio.dtos.response;

import com.dytecnology.cardapio.entities.Food;

public record FoodResponseDto(Long id, String titulo, String img, Integer preco) {
    public FoodResponseDto(Food food){
        this(food.getId(), food.getTitulo(), food.getImg(), food.getPreco());
    }
}
