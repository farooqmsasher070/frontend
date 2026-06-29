import { useState } from "react";
import { Leaf, ShieldCheck, ShoppingCart, Star } from "lucide-react";
import toast from "react-hot-toast";

import Button from "../../../components/common/Button";
import QuantitySelector from "./QuantitySelector";
import { useCartStore } from "../../../store/cartStore";
import ProductBadges from "./ProductBadges";
import type { Product } from "../types/product";

type Props = {
  product: Product;
};

export default function ProductInfo({ product }: Props) {
  const addItem = useCartStore((state) => state.addItem);

  const [quantity, setQuantity] = useState(1);
  const [selectedWeight, setSelectedWeight] = useState(product.weight);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem({
        id: product.id,
        name: product.name,
        image: product.image,
        price: product.price,
        weight: selectedWeight,
        quantity: 1,
      });
    }

    toast.success(`${product.name} added to cart`);
  };

  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold">
        {product.name}
      </h1>

      <div className="flex items-center gap-2">
        <Star
          size={18}
          className="fill-yellow-400 text-yellow-400"
        />

        <span>{product.rating}</span>

        <span className="text-gray-500">
          ({product.reviews} Reviews)
        </span>
      </div>

      <div className="flex items-center gap-4">
        <span className="text-4xl font-bold text-red-700">
          ₹{product.price}
        </span>

        <span className="text-2xl text-gray-400 line-through">
          ₹{product.originalPrice}
        </span>
      </div>
      <div className="flex items-center gap-3">
  <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700">
    ✅ In Stock
  </span>

  <span className="text-gray-500">
    18 units available
  </span>
</div>
<ProductBadges />
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <ShieldCheck className="text-green-600" size={18} />
          Fresh Today
        </div>

        <div className="flex items-center gap-2">
          <ShieldCheck className="text-green-600" size={18} />
          Halal Certified
        </div>

        <div className="flex items-center gap-2">
          <Leaf className="text-green-600" size={18} />
          Antibiotic Free
        </div>
      </div>

      <div>
        <h3 className="mb-3 font-semibold">
          Weight
        </h3>

        <div className="flex gap-3">
          {["250g", "500g", "1kg"].map((weight) => (
            <button
              key={weight}
              onClick={() => setSelectedWeight(weight)}
              className={`rounded-xl border px-5 py-2 ${
                selectedWeight === weight
                  ? "border-red-700 bg-red-700 text-white"
                  : "border-gray-300"
              }`}
            >
              {weight}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="mb-3 font-semibold">
          Quantity
        </h3>

        <QuantitySelector
          quantity={quantity}
          onIncrease={() =>
            setQuantity((q) => q + 1)
          }
          onDecrease={() =>
            setQuantity((q) =>
              Math.max(1, q - 1)
            )
          }
        />
      </div>

      <Button onClick={handleAddToCart}>
        <div className="flex items-center justify-center gap-2">
          <ShoppingCart size={18} />
          Add to Cart
        </div>
      </Button>

      <button className="w-full rounded-xl border border-red-700 py-3 font-semibold text-red-700 transition hover:bg-red-50">
        Buy Now
      </button>
    </div>
  );
}