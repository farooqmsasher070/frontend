import {
  ShieldCheck,
  Snowflake,
  Truck,
} from "lucide-react";

export default function ProductBadges() {
  const badges = [
    {
      icon: ShieldCheck,
      title: "Halal Certified",
    },
    {
      icon: Snowflake,
      title: "Cold Chain Maintained",
    },
    {
      icon: Truck,
      title: "Fast Delivery",
    },
  ];

  return (
    <div className="grid grid-cols-3 gap-4">
      {badges.map((badge) => {
        const Icon = badge.icon;

        return (
          <div
            key={badge.title}
            className="rounded-xl border bg-white p-4 text-center shadow-sm"
          >
            <Icon
              className="mx-auto mb-2 text-red-700"
              size={28}
            />

            <p className="text-sm font-semibold">
              {badge.title}
            </p>
          </div>
        );
      })}
    </div>
  );
}