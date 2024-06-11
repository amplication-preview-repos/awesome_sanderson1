import { Menu } from "../menu/Menu";
import { Order } from "../order/Order";

export type Restaurant = {
  address: string | null;
  contactNumber: string | null;
  createdAt: Date;
  id: string;
  menus?: Array<Menu>;
  name: string | null;
  orders?: Array<Order>;
  updatedAt: Date;
};
