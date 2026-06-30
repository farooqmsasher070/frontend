import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import SearchBar from "../components/shop/SearchBar";
import SortDropdown from "../components/shop/SortDropdown";
import CategoryFilter from "../components/shop/CategoryFilter";
import ProductGrid from "../components/shop/ProductGrid";
import PriceFilter from "../components/shop/PriceFilter";
import { useProducts } from "../hooks/useProducts";

export default function ProductsPage() {
  const [searchParams, setSearchParams] =
    useSearchParams();
  const searchQuery =
    searchParams.get("search") ?? "";

  const {
  products,
  category,
  search,
  setSearch,
  setCategory,
  setMaxPrice,
    maxPrice,
    sortBy,
    setSortBy,
} = useProducts(searchQuery);

  useEffect(() => {
    setSearch(searchQuery);
  }, [searchQuery, setSearch]);

  const handleSearchChange = (value: string) => {
    setSearch(value);

    const nextParams = new URLSearchParams(
      searchParams
    );

    if (value.trim()) {
      nextParams.set("search", value);
    } else {
      nextParams.delete("search");
    }

    setSearchParams(nextParams);
  };

  return (
    <div className="mx-auto max-w-7xl px-6 py-10">

      <div className="mb-10">
        <h1 className="text-4xl font-bold">
          Fresh Meat & Seafood
        </h1>

        <p className="mt-2 text-gray-600">
          Delivered fresh across Bangalore
        </p>
      </div>

      <div className="mb-6 flex flex-col gap-4 md:flex-row md:justify-between">
        <SearchBar
          value={search}
          onChange={handleSearchChange}
        />

        <SortDropdown
          value={sortBy}
          onChange={setSortBy}
        />
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
<aside className="space-y-6">
  <CategoryFilter
    value={category}
    onChange={setCategory}
  />

  <PriceFilter
    value={maxPrice}
    onChange={setMaxPrice}
  />
</aside>

        <main className="lg:col-span-3">
            <p className="text-red-600 font-bold">
  Search: {search}
</p>

<p className="text-blue-600 font-bold">
  Products Found: {products.length}
</p>
          <ProductGrid products={products} />
        </main>

      </div>

    </div>
  );
}
