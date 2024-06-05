import { HouseWhereUniqueInput } from "../house/HouseWhereUniqueInput";
import { RentCreateNestedManyWithoutTenantsInput } from "./RentCreateNestedManyWithoutTenantsInput";

export type TenantCreateInput = {
  email?: string | null;
  firstName?: string | null;
  house?: HouseWhereUniqueInput | null;
  lastName?: string | null;
  leaseEndDate?: Date | null;
  leaseStartDate?: Date | null;
  phoneNumber?: string | null;
  rents?: RentCreateNestedManyWithoutTenantsInput;
};
