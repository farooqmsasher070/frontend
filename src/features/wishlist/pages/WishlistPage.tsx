import WishlistGrid from "../components/WishlistGrid";

export default function WishlistPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-10">
      <h1 className="mb-8 text-4xl font-bold">
        My Wishlist
      </h1>

      <WishlistGrid />
    </div>
  );
}