import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { MenuListRelationFilter } from "../menu/MenuListRelationFilter";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";

export type RestaurantWhereInput = {
  address?: StringNullableFilter;
  contactNumber?: StringNullableFilter;
  id?: StringFilter;
  menus?: MenuListRelationFilter;
  name?: StringNullableFilter;
  orders?: OrderListRelationFilter;
};
