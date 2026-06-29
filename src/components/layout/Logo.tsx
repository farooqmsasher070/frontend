import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link
      to="/"
      className="flex items-center gap-2 font-bold text-2xl text-red-700"
    >
      <span>🥩</span>
      <span>FreshMeat</span>
    </Link>
  );
}