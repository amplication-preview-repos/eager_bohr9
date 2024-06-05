import { LandlordWhereInput } from "./LandlordWhereInput";
import { LandlordOrderByInput } from "./LandlordOrderByInput";

export type LandlordFindManyArgs = {
  where?: LandlordWhereInput;
  orderBy?: Array<LandlordOrderByInput>;
  skip?: number;
  take?: number;
};
