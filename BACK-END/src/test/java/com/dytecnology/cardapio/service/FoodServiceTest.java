package com.dytecnology.cardapio.service;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

import java.util.List;
import java.util.Optional;

import com.dytecnology.cardapio.dtos.request.FoodRequestDto;
import com.dytecnology.cardapio.dtos.response.FoodResponseDto;
import com.dytecnology.cardapio.entities.Food;
import com.dytecnology.cardapio.repositorys.FoodRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

@ExtendWith(value = MockitoExtension.class)
public class FoodServiceTest {

    @Mock
    private FoodRepository foodRepository;

    @InjectMocks
    private FoodService foodService;

    private Food food;
    private FoodRequestDto requestDto;

    @BeforeEach
    void setUp() {
        requestDto = new FoodRequestDto("Pizza", "img.png", 30);
        food = new Food(1L, "Pizza", "img.png", 30); // teu construtor precisa existir no model Food
    }

    // ---------- postFoods ----------
    @Test
    void testPostFoodsSuccess() {
        when(foodRepository.save(any(Food.class))).thenReturn(food);

        String result = foodService.postFoods(requestDto);

        assertEquals("prato cadastrado", result);
        verify(foodRepository, times(1)).save(any(Food.class));
    }

    @Test
    void testPostFoodsThrowsException() {
        when(foodRepository.save(any(Food.class))).thenThrow(new RuntimeException("Erro no banco"));

        assertThrows(RuntimeException.class, () -> foodService.postFoods(requestDto));
        verify(foodRepository, times(1)).save(any(Food.class));
    }

   
    // ---------- buscarPorId ----------
    @Test
    void testBuscarPorIdSuccess() {
        when(foodRepository.findById(1L)).thenReturn(Optional.of(food));

        Optional<FoodResponseDto> result = foodService.buscarPorId(1L);

        assertTrue(result.isPresent());
        assertEquals("Pizza", result.get().titulo());
        verify(foodRepository, times(1)).findById(1L);
    }

    @Test
    void testBuscarPorIdNotFound() {
        when(foodRepository.findById(1L)).thenReturn(Optional.empty());

        Optional<FoodResponseDto> result = foodService.buscarPorId(1L);

        assertTrue(result.isEmpty());
        verify(foodRepository, times(1)).findById(1L);
    }

    @Test
    void testBuscarPorIdThrowsException() {
        when(foodRepository.findById(1L)).thenThrow(new RuntimeException("Erro no banco"));

        assertThrows(RuntimeException.class, () -> foodService.buscarPorId(1L));
        verify(foodRepository, times(1)).findById(1L);
    }

    // ---------- atualizar ----------
    @Test
    void testAtualizarSuccess() {
        when(foodRepository.findById(1L)).thenReturn(Optional.of(food));
        when(foodRepository.save(any(Food.class))).thenReturn(food);

        String result = foodService.atualizar(1L, requestDto);

        assertEquals("Food atualizado com sucesso!", result);
        verify(foodRepository, times(1)).save(any(Food.class));
    }

    @Test
    void testAtualizarNotFound() {
        when(foodRepository.findById(1L)).thenReturn(Optional.empty());

        RuntimeException exception = assertThrows(RuntimeException.class,
                () -> foodService.atualizar(1L, requestDto));

        assertEquals("Food não encontrado com id: 1", exception.getMessage());
        verify(foodRepository, never()).save(any(Food.class));
    }

    // ---------- deletar ----------
    @Test
    void testDeletarSuccess() {
        doNothing().when(foodRepository).deleteById(1L);

        foodService.deletar(1L);

        verify(foodRepository, times(1)).deleteById(1L);
    }

    @Test
    void testDeletarThrowsException() {
        doThrow(new RuntimeException("Erro ao deletar")).when(foodRepository).deleteById(1L);

        assertThrows(RuntimeException.class, () -> foodService.deletar(1L));
        verify(foodRepository, times(1)).deleteById(1L);
    }
}
