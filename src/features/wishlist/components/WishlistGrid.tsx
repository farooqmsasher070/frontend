import ProductCard from "../../products/components/ProductCard";
import { useWishlistStore } from "../../../store/wishlistStore";
import EmptyWishlist from "./EmptyWishlist";

export default function WishlistGrid() {
  const items = useWishlistStore((state) => state.items);

  if (items.length === 0) {
    return <EmptyWishlist />;
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
}