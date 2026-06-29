import { useState } from "react";

type Props = {
  images: string[];
  discount: number;
};

export default function ProductGallery({
  images,
  discount,
}: Props) {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div>
      {/* Main Image */}
      <div className="relative overflow-hidden rounded-2xl border bg-white">
        <img
          src={images[selectedImage]}
          alt="Product"
className="h-[500px] w-full cursor-zoom-in object-cover transition duration-500 hover:scale-125"        />

        <span className="absolute left-5 top-5 rounded-full bg-red-600 px-4 py-2 text-sm font-bold text-white">
          {discount}% OFF
        </span>
      </div>

      {/* Thumbnails */}
      <div className="mt-4 flex gap-3">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`overflow-hidden rounded-xl border-2 transition ${
              selectedImage === index
                ? "border-red-600"
                : "border-gray-200"
            }`}
          >
            <img
              src={image}
              alt=""
              className="h-20 w-20 object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}