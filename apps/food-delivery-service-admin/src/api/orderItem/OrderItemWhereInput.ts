import { StringFilter } from "../../util/StringFilter";
import { MenuWhereUniqueInput } from "../menu/MenuWhereUniqueInput";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type OrderItemWhereInput = {
  id?: StringFilter;
  menu?: MenuWhereUniqueInput;
  order?: OrderWhereUniqueInput;
  quantity?: IntNullableFilter;
};
