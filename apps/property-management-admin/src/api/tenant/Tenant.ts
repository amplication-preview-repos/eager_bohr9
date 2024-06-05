import { House } from "../house/House";
import { Rent } from "../rent/Rent";

export type Tenant = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  house?: House | null;
  id: string;
  lastName: string | null;
  leaseEndDate: Date | null;
  leaseStartDate: Date | null;
  phoneNumber: string | null;
  rents?: Array<Rent>;
  updatedAt: Date;
};
