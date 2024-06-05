import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  BooleanInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { RentTitle } from "../rent/RentTitle";
import { TenantTitle } from "../tenant/TenantTitle";

export const HouseEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="address" source="address" />
        <BooleanInput label="isOccupied" source="isOccupied" />
        <NumberInput step={1} label="numberOfRooms" source="numberOfRooms" />
        <ReferenceArrayInput
          source="rents"
          reference="Rent"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={RentTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="tenants"
          reference="Tenant"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TenantTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
