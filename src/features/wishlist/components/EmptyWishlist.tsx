import { Heart } from "lucide-react";

export default function EmptyWishlist() {
  return (
    <div className="py-20 text-center">
      <Heart
        className="mx-auto mb-4 text-gray-300"
        size={70}
      />

      <h2 className="text-2xl font-bold">
        Your Wishlist is Empty
      </h2>

      <p className="mt-3 text-gray-500">
        Save your favourite products here.
      </p>
    </div>
  );
}