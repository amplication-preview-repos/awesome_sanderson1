import { OrderItem } from "../orderItem/OrderItem";
import { Restaurant } from "../restaurant/Restaurant";
import { User } from "../user/User";

export type Order = {
  createdAt: Date;
  id: string;
  orderDate: Date | null;
  orderItems?: Array<OrderItem>;
  restaurant?: Restaurant | null;
  status?: "Option1" | null;
  totalAmount: number | null;
  updatedAt: Date;
  user?: User | null;
};
