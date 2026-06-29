import { useState } from "react";

import type { Product } from "../types/product";

type Props = {
  product: Product;
};

const tabs = [
  "Description",
  "Nutrition",
  "Storage",
  "Reviews",
];

export default function ProductTabs({
  product,
}: Props) {
  const [activeTab, setActiveTab] =
    useState("Description");

  return (
    <div className="mt-12">
      <div className="flex flex-wrap gap-3 border-b">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`border-b-2 px-4 py-3 font-medium transition ${
              activeTab === tab
                ? "border-red-700 text-red-700"
                : "border-transparent text-gray-600"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="rounded-b-xl border border-t-0 bg-white p-6">
        {activeTab === "Description" && (
          <p>{product.description}</p>
        )}

        {activeTab === "Nutrition" && (
          <p>{product.nutrition}</p>
        )}

        {activeTab === "Storage" && (
          <p>{product.storage}</p>
        )}

        {activeTab === "Reviews" && (
          <div>
            ⭐⭐⭐⭐⭐

            <p className="mt-4">
              Customer reviews coming soon.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}