import { HouseWhereUniqueInput } from "../house/HouseWhereUniqueInput";
import { RentUpdateManyWithoutTenantsInput } from "./RentUpdateManyWithoutTenantsInput";

export type TenantUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  house?: HouseWhereUniqueInput | null;
  lastName?: string | null;
  leaseEndDate?: Date | null;
  leaseStartDate?: Date | null;
  phoneNumber?: string | null;
  rents?: RentUpdateManyWithoutTenantsInput;
};
