import { House } from "../house/House";
import { Tenant } from "../tenant/Tenant";

export type Rent = {
  amount: number | null;
  createdAt: Date;
  dueDate: Date | null;
  house?: House | null;
  id: string;
  paymentDate: Date | null;
  status?: "Option1" | null;
  tenant?: Tenant | null;
  updatedAt: Date;
};
