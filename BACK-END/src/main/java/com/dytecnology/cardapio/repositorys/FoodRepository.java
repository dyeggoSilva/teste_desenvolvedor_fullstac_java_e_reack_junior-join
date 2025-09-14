package com.dytecnology.cardapio.repositorys;

import com.dytecnology.cardapio.entities.Food;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FoodRepository extends JpaRepository<Food,Long> {
}
