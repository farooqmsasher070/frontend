import Container from "../../../components/common/Container";
import CategoryCard from "./components/CategoryCard";
import { categories } from "../../../data/categories";

export default function CategorySection() {
  return (
    <section className="py-20">
      <Container>
        <h2 className="mb-12 text-center text-4xl font-bold">
          Shop By Category
        </h2>

        <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-5">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              {...category}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}