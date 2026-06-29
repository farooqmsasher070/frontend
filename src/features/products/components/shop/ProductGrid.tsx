import ProductCard from "../ProductCard";
import type { Product } from "../../types/product";

type Props = {
  products: Product[];
};

export default function ProductGrid({
  products,
}: Props) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
}