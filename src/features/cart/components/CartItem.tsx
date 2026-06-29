import { Minus, Plus, Trash2 } from "lucide-react";
import type { CartItem as CartItemType } from "../../../types/cart";
import { useCartStore } from "../../../store/cartStore";

type Props = {
  item: CartItemType;
};

export default function CartItem({ item }: Props) {
  const increaseQuantity = useCartStore(
    (state) => state.increaseQuantity
  );

  const decreaseQuantity = useCartStore(
    (state) => state.decreaseQuantity
  );

  const removeItem = useCartStore(
    (state) => state.removeItem
  );

  return (
    <div className="flex gap-4 rounded-xl border p-4">
      <img
        src={item.image}
        alt={item.name}
        className="h-24 w-24 rounded-lg object-cover"
      />

      <div className="flex flex-1 flex-col justify-between">
        <div>
          <h3 className="font-semibold">{item.name}</h3>

          <p className="text-sm text-gray-500">
            {item.weight}
          </p>

          <p className="mt-1 font-bold text-red-700">
            ₹{item.price}
          </p>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 rounded-lg border px-3 py-1">
            <button onClick={() => decreaseQuantity(item.id)}>
              <Minus size={16} />
            </button>

            <span>{item.quantity}</span>

            <button onClick={() => increaseQuantity(item.id)}>
              <Plus size={16} />
            </button>
          </div>

          <button
            onClick={() => removeItem(item.id)}
            className="text-red-600 transition hover:text-red-800"
          >
            <Trash2 size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}