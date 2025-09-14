import axios, { type AxiosPromise } from "axios";
import type { FoodData } from "../interfaces/FoodData";
import { useQuery } from "@tanstack/react-query";

const API_URL = "https://localhost:8080";

const fetchData = async (): AxiosPromise<FoodData[]> => {
  const response = axios.get(`${API_URL}/food`);
  return response;
};

export function useFoodDataById(id: number) {
  const query = useQuery<FoodData>({
    queryKey: ["food-data", id],
    queryFn: async () => {
      const response = await fetch(`${API_URL}/food/${id}`);
      if (!response.ok) throw new Error("Erro ao buscar dados");
      return response.json();
    },
    enabled: !!id,
  });

  return query;
}

export function useFoodData() {
  const query = useQuery({
    queryFn: fetchData,
    queryKey: ["food-data"],
    retry: 2,
  });

  return {
    ...query,
    data: query.data?.data,
  };
}
