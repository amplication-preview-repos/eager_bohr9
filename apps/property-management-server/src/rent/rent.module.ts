import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { RentModuleBase } from "./base/rent.module.base";
import { RentService } from "./rent.service";
import { RentController } from "./rent.controller";
import { RentResolver } from "./rent.resolver";

@Module({
  imports: [RentModuleBase, forwardRef(() => AuthModule)],
  controllers: [RentController],
  providers: [RentService, RentResolver],
  exports: [RentService],
})
export class RentModule {}
