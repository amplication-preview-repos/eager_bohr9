import { StringNullableFilter } from "../../util/StringNullableFilter";
import { HouseWhereUniqueInput } from "../house/HouseWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { RentListRelationFilter } from "../rent/RentListRelationFilter";

export type TenantWhereInput = {
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  house?: HouseWhereUniqueInput;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  leaseEndDate?: DateTimeNullableFilter;
  leaseStartDate?: DateTimeNullableFilter;
  phoneNumber?: StringNullableFilter;
  rents?: RentListRelationFilter;
};
