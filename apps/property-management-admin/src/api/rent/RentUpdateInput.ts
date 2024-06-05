import { HouseWhereUniqueInput } from "../house/HouseWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type RentUpdateInput = {
  amount?: number | null;
  dueDate?: Date | null;
  house?: HouseWhereUniqueInput | null;
  paymentDate?: Date | null;
  status?: "Option1" | null;
  tenant?: TenantWhereUniqueInput | null;
};
