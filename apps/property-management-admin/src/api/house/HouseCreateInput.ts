import { RentCreateNestedManyWithoutHousesInput } from "./RentCreateNestedManyWithoutHousesInput";
import { TenantCreateNestedManyWithoutHousesInput } from "./TenantCreateNestedManyWithoutHousesInput";

export type HouseCreateInput = {
  address?: string | null;
  isOccupied?: boolean | null;
  numberOfRooms?: number | null;
  rents?: RentCreateNestedManyWithoutHousesInput;
  tenants?: TenantCreateNestedManyWithoutHousesInput;
};
