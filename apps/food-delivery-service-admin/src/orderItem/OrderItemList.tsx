import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { MENU_TITLE_FIELD } from "../menu/MenuTitle";
import { ORDER_TITLE_FIELD } from "../order/OrderTitle";

export const OrderItemList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"OrderItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField label="menu" source="menu.id" reference="Menu">
          <TextField source={MENU_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="order" source="order.id" reference="Order">
          <TextField source={ORDER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="quantity" source="quantity" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
