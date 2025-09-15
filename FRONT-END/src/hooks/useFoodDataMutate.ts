
import axios from "axios";
import type { FoodData } from "../interfaces/FoodData";
import { useMutation, useQueryClient } from "@tanstack/react-query";



 const API_URL = 'http://localhost:8080';

const postFood = async (data: FoodData): Promise<FoodData> => {
  const response = await axios.post<FoodData>(`${API_URL}/food`, data);
  return response.data;
};



const updateFood = async (data: FoodData): Promise<FoodData> => {
  const response = await axios.put<FoodData>(`${API_URL}/food/${data.id}`, data);
  return response.data;
};

const deleteFood = async (id: number): Promise<number> => {
  await axios.delete(`${API_URL}/food/${id}`);
  return id;
};


export function createFood(){
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const queryClient = useQueryClient();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const mutate = useMutation({
        mutationFn: postFood,
        retry:2,
        onSuccess:()=>{
            queryClient.invalidateQueries({ queryKey: ['food-data'] });
        }
    })

    return mutate
}

export function UpdateFood() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateFood,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["food-data"] });
    },
  });
}

export function DeleteFood() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteFood,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["food-data"] });
    },
  });
}