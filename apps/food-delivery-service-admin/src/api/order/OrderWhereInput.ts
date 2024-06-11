import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { OrderItemListRelationFilter } from "../orderItem/OrderItemListRelationFilter";
import { RestaurantWhereUniqueInput } from "../restaurant/RestaurantWhereUniqueInput";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OrderWhereInput = {
  id?: StringFilter;
  orderDate?: DateTimeNullableFilter;
  orderItems?: OrderItemListRelationFilter;
  restaurant?: RestaurantWhereUniqueInput;
  status?: "Option1";
  totalAmount?: FloatNullableFilter;
  user?: UserWhereUniqueInput;
};
