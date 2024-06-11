import { OrderItemCreateNestedManyWithoutMenusInput } from "./OrderItemCreateNestedManyWithoutMenusInput";
import { RestaurantWhereUniqueInput } from "../restaurant/RestaurantWhereUniqueInput";

export type MenuCreateInput = {
  description?: string | null;
  name?: string | null;
  orderItems?: OrderItemCreateNestedManyWithoutMenusInput;
  price?: number | null;
  restaurant?: RestaurantWhereUniqueInput | null;
};
