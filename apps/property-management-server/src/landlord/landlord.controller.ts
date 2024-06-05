import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { LandlordService } from "./landlord.service";
import { LandlordControllerBase } from "./base/landlord.controller.base";

@swagger.ApiTags("landlords")
@common.Controller("landlords")
export class LandlordController extends LandlordControllerBase {
  constructor(
    protected readonly service: LandlordService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
