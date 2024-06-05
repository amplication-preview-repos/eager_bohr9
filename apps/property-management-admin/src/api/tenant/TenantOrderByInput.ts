import { SortOrder } from "../../util/SortOrder";

export type TenantOrderByInput = {
  createdAt?: SortOrder;
  email?: SortOrder;
  firstName?: SortOrder;
  houseId?: SortOrder;
  id?: SortOrder;
  lastName?: SortOrder;
  leaseEndDate?: SortOrder;
  leaseStartDate?: SortOrder;
  phoneNumber?: SortOrder;
  updatedAt?: SortOrder;
};
