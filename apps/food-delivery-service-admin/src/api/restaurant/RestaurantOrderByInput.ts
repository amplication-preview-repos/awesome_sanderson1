import { SortOrder } from "../../util/SortOrder";

export type RestaurantOrderByInput = {
  address?: SortOrder;
  contactNumber?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
