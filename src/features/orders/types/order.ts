import type { Product } from "../../products/types/product";

export type OrderStatus =
  | "Processing"
  | "Packed"
  | "Shipped"
  | "Delivered"
  | "Cancelled";

export interface Order {
  id: string;
  date: string;

  status: OrderStatus;

  total: number;

  paymentMethod: string;

  shippingMethod: string;

  items: Product[];
}