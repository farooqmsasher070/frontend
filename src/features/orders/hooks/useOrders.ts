import { orderService } from "../services/orderService";

export function useOrders() {
  return {
    orders: orderService.getAll(),
  };
}