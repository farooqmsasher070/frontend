import type { Order } from "../types/order";
import { products } from "../../products/data/products";

export const orders: Order[] = [
  {
    id: "FM100245",
    date: "29 Jun 2026",
    status: "Delivered",
    total: 1598,
    paymentMethod: "UPI",
    shippingMethod: "Express",

    items: [
      products[0],
      products[2],
    ],
  },

  {
    id: "FM100244",
    date: "28 Jun 2026",
    status: "Shipped",
    total: 699,
    paymentMethod: "Cash on Delivery",
    shippingMethod: "Standard",

    items: [
      products[3],
    ],
  },
];