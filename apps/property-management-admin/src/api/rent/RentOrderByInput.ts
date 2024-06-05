import { SortOrder } from "../../util/SortOrder";

export type RentOrderByInput = {
  amount?: SortOrder;
  createdAt?: SortOrder;
  dueDate?: SortOrder;
  houseId?: SortOrder;
  id?: SortOrder;
  paymentDate?: SortOrder;
  status?: SortOrder;
  tenantId?: SortOrder;
  updatedAt?: SortOrder;
};
