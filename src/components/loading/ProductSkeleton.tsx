export default function ProductSkeleton() {
  return (
    <div className="animate-pulse overflow-hidden rounded-2xl bg-white shadow">
      <div className="h-56 bg-gray-200" />

      <div className="space-y-4 p-5">
        <div className="h-6 rounded bg-gray-200" />

        <div className="h-4 w-24 rounded bg-gray-200" />

        <div className="h-4 w-20 rounded bg-gray-200" />

        <div className="h-10 rounded bg-gray-200" />
      </div>
    </div>
  );
}