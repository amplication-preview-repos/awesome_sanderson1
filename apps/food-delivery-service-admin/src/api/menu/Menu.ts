import { OrderItem } from "../orderItem/OrderItem";
import { Restaurant } from "../restaurant/Restaurant";

export type Menu = {
  createdAt: Date;
  description: string | null;
  id: string;
  name: string | null;
  orderItems?: Array<OrderItem>;
  price: number | null;
  restaurant?: Restaurant | null;
  updatedAt: Date;
};
