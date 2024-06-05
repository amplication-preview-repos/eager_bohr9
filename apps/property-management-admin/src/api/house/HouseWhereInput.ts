import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { RentListRelationFilter } from "../rent/RentListRelationFilter";
import { TenantListRelationFilter } from "../tenant/TenantListRelationFilter";

export type HouseWhereInput = {
  address?: StringNullableFilter;
  id?: StringFilter;
  isOccupied?: BooleanNullableFilter;
  numberOfRooms?: IntNullableFilter;
  rents?: RentListRelationFilter;
  tenants?: TenantListRelationFilter;
};
