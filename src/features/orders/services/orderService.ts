import { orders } from "../data/orders";

export const orderService = {
  getAll() {
    return orders;
  },

  getById(id: string) {
    return orders.find((order) => order.id === id);
  },
};