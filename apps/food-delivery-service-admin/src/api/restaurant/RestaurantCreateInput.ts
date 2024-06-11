import { MenuCreateNestedManyWithoutRestaurantsInput } from "./MenuCreateNestedManyWithoutRestaurantsInput";
import { OrderCreateNestedManyWithoutRestaurantsInput } from "./OrderCreateNestedManyWithoutRestaurantsInput";

export type RestaurantCreateInput = {
  address?: string | null;
  contactNumber?: string | null;
  menus?: MenuCreateNestedManyWithoutRestaurantsInput;
  name?: string | null;
  orders?: OrderCreateNestedManyWithoutRestaurantsInput;
};
