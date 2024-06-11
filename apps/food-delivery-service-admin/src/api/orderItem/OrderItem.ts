import { Menu } from "../menu/Menu";
import { Order } from "../order/Order";

export type OrderItem = {
  createdAt: Date;
  id: string;
  menu?: Menu | null;
  order?: Order | null;
  quantity: number | null;
  updatedAt: Date;
};
