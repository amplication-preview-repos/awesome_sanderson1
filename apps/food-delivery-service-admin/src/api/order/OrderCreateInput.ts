import { OrderItemCreateNestedManyWithoutOrdersInput } from "./OrderItemCreateNestedManyWithoutOrdersInput";
import { RestaurantWhereUniqueInput } from "../restaurant/RestaurantWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OrderCreateInput = {
  orderDate?: Date | null;
  orderItems?: OrderItemCreateNestedManyWithoutOrdersInput;
  restaurant?: RestaurantWhereUniqueInput | null;
  status?: "Option1" | null;
  totalAmount?: number | null;
  user?: UserWhereUniqueInput | null;
};
