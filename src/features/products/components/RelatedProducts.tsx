import { useParams } from "react-router-dom";

import ProductCard from "./ProductCard";
import { productService } from "../services/productService";


export default function RelatedProducts() {
  const { id } = useParams();

  const relatedProducts = productService.getRelated(
    Number(id)
  );

  return (
    <section className="mt-16">
      <h2 className="mb-6 text-3xl font-bold">
        You May Also Like
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {relatedProducts.map((product) => (
          <ProductCard
  key={product.id}
  product={product}
/>
        ))}
      </div>
    </section>
  );
}