import { Rent } from "../rent/Rent";
import { Tenant } from "../tenant/Tenant";

export type House = {
  address: string | null;
  createdAt: Date;
  id: string;
  isOccupied: boolean | null;
  numberOfRooms: number | null;
  rents?: Array<Rent>;
  tenants?: Array<Tenant>;
  updatedAt: Date;
};
