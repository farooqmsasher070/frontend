import { products } from "../data/products";
import type { Product } from "../types/product";

export const productService = {
  getAll(): Product[] {
    return products;
  },

  getById(id: number): Product | undefined {
    return products.find((p) => p.id === id);
  },

  getRelated(id: number): Product[] {
    return products
      .filter((p) => p.id !== id)
      .slice(0, 4);
  },
search(
  query: string,
  category: string,
  maxPrice: number,
  sortBy: string
): Product[] {

  let filtered = products.filter((product) => {

    const matchesSearch =
      product.name
        .toLowerCase()
        .includes(query.toLowerCase());

    const matchesCategory =
      category === "All" ||
      product.category === category;

    const matchesPrice =
      product.price <= maxPrice;

    return (
      matchesSearch &&
      matchesCategory &&
      matchesPrice
    );

  });

  switch (sortBy) {

    case "priceLow":
      filtered.sort(
        (a, b) => a.price - b.price
      );
      break;

    case "priceHigh":
      filtered.sort(
        (a, b) => b.price - a.price
      );
      break;

    case "rating":
      filtered.sort(
        (a, b) => b.rating - a.rating
      );
      break;

    case "name":
      filtered.sort((a, b) =>
        a.name.localeCompare(b.name)
      );
      break;

    default:
      filtered.sort(
        (a, b) => b.reviews - a.reviews
      );
  }

  return filtered;
},
};