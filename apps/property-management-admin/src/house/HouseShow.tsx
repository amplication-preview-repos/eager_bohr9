import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { HOUSE_TITLE_FIELD } from "./HouseTitle";
import { TENANT_TITLE_FIELD } from "../tenant/TenantTitle";

export const HouseShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="address" source="address" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <BooleanField label="isOccupied" source="isOccupied" />
        <TextField label="numberOfRooms" source="numberOfRooms" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField reference="Rent" target="houseId" label="Rents">
          <Datagrid rowClick="show">
            <TextField label="amount" source="amount" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="dueDate" source="dueDate" />
            <ReferenceField label="House" source="house.id" reference="House">
              <TextField source={HOUSE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <TextField label="paymentDate" source="paymentDate" />
            <TextField label="status" source="status" />
            <ReferenceField
              label="Tenant"
              source="tenant.id"
              reference="Tenant"
            >
              <TextField source={TENANT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="Tenant" target="houseId" label="Tenants">
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="email" source="email" />
            <TextField label="firstName" source="firstName" />
            <ReferenceField label="House" source="house.id" reference="House">
              <TextField source={HOUSE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <TextField label="lastName" source="lastName" />
            <TextField label="leaseEndDate" source="leaseEndDate" />
            <TextField label="leaseStartDate" source="leaseStartDate" />
            <TextField label="phoneNumber" source="phoneNumber" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
