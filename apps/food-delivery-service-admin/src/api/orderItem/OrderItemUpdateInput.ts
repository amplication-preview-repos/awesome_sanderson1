import { MenuWhereUniqueInput } from "../menu/MenuWhereUniqueInput";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";

export type OrderItemUpdateInput = {
  menu?: MenuWhereUniqueInput | null;
  order?: OrderWhereUniqueInput | null;
  quantity?: number | null;
};
