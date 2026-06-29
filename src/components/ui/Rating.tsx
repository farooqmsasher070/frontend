import { Star } from "lucide-react";

type RatingProps = {
  rating: number;
  reviews: number;
};

export default function Rating({
  rating,
  reviews,
}: RatingProps) {
  return (
    <div className="flex items-center gap-2">
      <Star
        size={16}
        className="fill-yellow-400 text-yellow-400"
      />

      <span className="font-medium">
        {rating}
      </span>

      <span className="text-gray-500">
        ({reviews})
      </span>
    </div>
  );
}