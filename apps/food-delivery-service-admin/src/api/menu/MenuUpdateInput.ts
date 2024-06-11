import { OrderItemUpdateManyWithoutMenusInput } from "./OrderItemUpdateManyWithoutMenusInput";
import { RestaurantWhereUniqueInput } from "../restaurant/RestaurantWhereUniqueInput";

export type MenuUpdateInput = {
  description?: string | null;
  name?: string | null;
  orderItems?: OrderItemUpdateManyWithoutMenusInput;
  price?: number | null;
  restaurant?: RestaurantWhereUniqueInput | null;
};
