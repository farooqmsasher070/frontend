import { useParams } from "react-router-dom";

import ProductGallery from "../components/ProductGallery";
import ProductInfo from "../components/ProductInfo";
import ProductTabs from "../components/ProductTabs";
import RelatedProducts from "../components/RelatedProducts";

import { products } from "../data/products";

export default function ProductDetailsPage() {
  const { id } = useParams();

  const product = products.find(
    (p) => p.id === Number(id)
  );

  if (!product) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <h1 className="text-3xl font-bold">
          Product Not Found
        </h1>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-6 py-10">
      {/* Breadcrumb */}
      <div className="mb-8 text-sm text-gray-500">
        Home / Products / {product.name}
      </div>

      {/* Gallery + Product Info */}
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        <ProductGallery
          images={[
            product.image,
            product.image,
            product.image,
            product.image,
          ]}
          discount={product.discount}
        />

        <ProductInfo product={product} />
      </div>

      {/* Tabs */}
      <div className="mt-16">
        <ProductTabs product={product} />
      </div>

      {/* Related Products */}
      <div className="mt-16">
        <RelatedProducts />
      </div>
    </div>
  );
}