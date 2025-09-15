import { useState, useEffect } from "react";
import type { FoodData } from "../interfaces/FoodData";


export function useFoodData(itemsPerPage = 6) {
  const [data, setData] = useState<FoodData[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const fetchData = async () => {
    try {
      const res = await fetch(
        `http://localhost:8080/food?page=${currentPage}&size=${itemsPerPage}`
      );
      const json = await res.json();

      setData(json.content as FoodData[]);
      setTotalPages(json.totalPages - 1);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, [currentPage]);

  const nextPage = () => setCurrentPage((p) => Math.min(p + 1, totalPages));
  const prevPage = () => setCurrentPage((p) => Math.max(p - 1, 0));

  return { data, currentPage, totalPages, nextPage, prevPage, refresh: fetchData };
}

