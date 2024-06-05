import { RentUpdateManyWithoutHousesInput } from "./RentUpdateManyWithoutHousesInput";
import { TenantUpdateManyWithoutHousesInput } from "./TenantUpdateManyWithoutHousesInput";

export type HouseUpdateInput = {
  address?: string | null;
  isOccupied?: boolean | null;
  numberOfRooms?: number | null;
  rents?: RentUpdateManyWithoutHousesInput;
  tenants?: TenantUpdateManyWithoutHousesInput;
};
