import Container from "../../../components/common/Container";
import ProductCard from "../../products/components/ProductCard";
import { products } from "../../products/data/products";

export default function BestSellerSection() {
  return (
    <section className="bg-slate-100 py-20">
      <Container>
        <h2 className="mb-12 text-center text-4xl font-bold">
          🔥 Best Sellers
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}