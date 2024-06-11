import { Order } from "../order/Order";
import { JsonValue } from "type-fest";

export type User = {
  address: string | null;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  orders?: Array<Order>;
  phoneNumber: string | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
