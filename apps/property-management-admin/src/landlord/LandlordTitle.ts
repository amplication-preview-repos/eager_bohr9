import { Landlord as TLandlord } from "../api/landlord/Landlord";

export const LANDLORD_TITLE_FIELD = "name";

export const LandlordTitle = (record: TLandlord): string => {
  return record.name?.toString() || String(record.id);
};
