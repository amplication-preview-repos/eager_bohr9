import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { HouseTitle } from "../house/HouseTitle";
import { RentTitle } from "../rent/RentTitle";

export const TenantCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="email" source="email" type="email" />
        <TextInput label="firstName" source="firstName" />
        <ReferenceInput source="house.id" reference="House" label="House">
          <SelectInput optionText={HouseTitle} />
        </ReferenceInput>
        <TextInput label="lastName" source="lastName" />
        <DateTimeInput label="leaseEndDate" source="leaseEndDate" />
        <DateTimeInput label="leaseStartDate" source="leaseStartDate" />
        <TextInput label="phoneNumber" source="phoneNumber" />
        <ReferenceArrayInput
          source="rents"
          reference="Rent"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={RentTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
