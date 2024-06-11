import { MenuUpdateManyWithoutRestaurantsInput } from "./MenuUpdateManyWithoutRestaurantsInput";
import { OrderUpdateManyWithoutRestaurantsInput } from "./OrderUpdateManyWithoutRestaurantsInput";

export type RestaurantUpdateInput = {
  address?: string | null;
  contactNumber?: string | null;
  menus?: MenuUpdateManyWithoutRestaurantsInput;
  name?: string | null;
  orders?: OrderUpdateManyWithoutRestaurantsInput;
};
