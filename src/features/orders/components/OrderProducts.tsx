import type { Product } from "../../products/types/product";

type Props = {
  products: Product[];
};

export default function OrderProducts({
  products,
}: Props) {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">

      <h2 className="mb-6 text-2xl font-bold">
        Products
      </h2>

      <div className="space-y-5">

        {products.map((product) => (
          <div
            key={product.id}
            className="flex items-center gap-4"
          >
            <img
              src={product.image}
              alt={product.name}
              className="h-20 w-20 rounded-xl object-cover"
            />

            <div className="flex-1">

              <h3 className="font-semibold">
                {product.name}
              </h3>

              <p className="text-gray-500">
                {product.weight}
              </p>

            </div>

            <div className="font-bold text-red-700">
              ₹{product.price}
            </div>

          </div>
        ))}

      </div>

    </div>
  );
}