import { useState } from "react";
import { productService } from "../services/productService";

export function useProducts(initialSearch = "") {
  const [search, setSearch] = useState(initialSearch);
  const [category, setCategory] = useState("All");
  const [maxPrice, setMaxPrice] = useState(1200);
const [sortBy, setSortBy] =
  useState("popular");
  const products = productService.search(
    search,
    category,
    maxPrice,
    sortBy
  );

  return {
    products,

    search,
    setSearch,

    category,
    setCategory,

    maxPrice,
    setMaxPrice,

    sortBy,
    setSortBy,
  };
}
