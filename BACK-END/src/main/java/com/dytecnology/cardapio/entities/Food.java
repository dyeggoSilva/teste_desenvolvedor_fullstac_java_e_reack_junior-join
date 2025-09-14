package com.dytecnology.cardapio.entities;

import com.dytecnology.cardapio.dtos.request.FoodRequestDto;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity(name = "foods")
@Table(name= "foods")
@Getter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
public class Food {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String titulo;
    private String img;
    private Integer preco;

    public Food(FoodRequestDto data) {
        this.titulo = data.titulo();
        this.img = data.img();
        this.preco = data.preco();
    }
    public Food updateFromDto(FoodRequestDto dto) {
        return new Food(this.id, dto);
    }

    private Food(Long id, FoodRequestDto dto) {
        this.id = id;
        this.titulo = dto.titulo();
        this.preco = dto.preco();
        this.img = dto.img();
    }
}
