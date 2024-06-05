import { SortOrder } from "../../util/SortOrder";

export type HouseOrderByInput = {
  address?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  isOccupied?: SortOrder;
  numberOfRooms?: SortOrder;
  updatedAt?: SortOrder;
};
