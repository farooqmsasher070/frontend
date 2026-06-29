import { Link } from "react-router-dom";
import { Heart, ShoppingCart, Star } from "lucide-react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

import Button from "../../../components/common/Button";
import { useCartStore } from "../../../store/cartStore";
import { useWishlistStore } from "../../../store/wishlistStore";

import type { Product } from "../types/product";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({
  product,
}: ProductCardProps) {
  const addItem = useCartStore((state) => state.addItem);

  const toggleWishlist = useWishlistStore(
    (state) => state.toggleItem
  );

  const isFavourite = useWishlistStore((state) =>
    state.isFavourite(product.id)
  );

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      image: product.image,
      price: product.price,
      quantity: 1,
      weight: product.weight,
    });

    toast.success(`${product.name} added to cart`);
  };

  const handleWishlist = (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();

    toggleWishlist({
      id: product.id,
      name: product.name,
      image: product.image,
      price: product.price,
      originalPrice: product.originalPrice,
      weight: product.weight,
      rating: product.rating,
      reviews: product.reviews,
      discount: product.discount,
    });

    toast.success(
      isFavourite
        ? "Removed from Wishlist"
        : "Added to Wishlist"
    );
  };

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className="group overflow-hidden rounded-2xl bg-white shadow-md transition hover:shadow-xl"
    >
      {/* Product Image */}
      <Link to={`/products/${product.id}`}>
        <div className="relative overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="h-60 w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          <span className="absolute left-4 top-4 rounded-full bg-red-600 px-3 py-1 text-xs font-bold text-white">
            {product.discount}% OFF
          </span>

          <button
            type="button"
            onClick={handleWishlist}
            className="absolute right-4 top-4 rounded-full bg-white p-2 shadow transition hover:bg-red-50"
          >
            <Heart
              size={20}
              className={
                isFavourite
                  ? "fill-red-600 text-red-600"
                  : "text-gray-600"
              }
            />
          </button>
        </div>
      </Link>

      {/* Product Details */}
      <div className="space-y-3 p-5">
        <Link
          to={`/products/${product.id}`}
          className="block space-y-3"
        >
          <h3 className="text-lg font-bold transition hover:text-red-700">
            {product.name}
          </h3>

          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Star
              size={16}
              className="fill-yellow-400 text-yellow-400"
            />

            <span>{product.rating}</span>

            <span>
              ({product.reviews} reviews)
            </span>
          </div>

          <p className="text-gray-500">
            {product.weight}
          </p>

          <div className="flex items-center gap-3">
            <span className="text-2xl font-bold text-red-700">
              ₹{product.price}
            </span>

            <span className="text-gray-400 line-through">
              ₹{product.originalPrice}
            </span>
          </div>
        </Link>

        <Button onClick={handleAddToCart}>
          <div className="flex items-center justify-center gap-2">
            <ShoppingCart size={18} />
            Add to Cart
          </div>
        </Button>
      </div>
    </motion.div>
  );
}