import { NavLink } from "react-router-dom";

const links = [
  { name: "Home", path: "/" },
  { name: "Products", path: "/products" },
  { name: "Offers", path: "/offers" },
  { name: "Contact", path: "/contact" },
];

export default function NavLinks() {
  return (
    <div className="hidden md:flex items-center gap-8">
      {links.map((link) => (
        <NavLink
          key={link.path}
          to={link.path}
          className={({ isActive }) =>
            `font-medium transition ${
              isActive
                ? "text-red-700"
                : "text-gray-700 hover:text-red-700"
            }`
          }
        >
          {link.name}
        </NavLink>
      ))}
    </div>
  );
}