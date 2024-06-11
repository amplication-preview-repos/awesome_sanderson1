import { SortOrder } from "../../util/SortOrder";

export type OrderItemOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  menuId?: SortOrder;
  orderId?: SortOrder;
  quantity?: SortOrder;
  updatedAt?: SortOrder;
};
