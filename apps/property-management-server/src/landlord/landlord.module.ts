import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { LandlordModuleBase } from "./base/landlord.module.base";
import { LandlordService } from "./landlord.service";
import { LandlordController } from "./landlord.controller";
import { LandlordResolver } from "./landlord.resolver";

@Module({
  imports: [LandlordModuleBase, forwardRef(() => AuthModule)],
  controllers: [LandlordController],
  providers: [LandlordService, LandlordResolver],
  exports: [LandlordService],
})
export class LandlordModule {}
