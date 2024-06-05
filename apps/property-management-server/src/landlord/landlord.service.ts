import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LandlordServiceBase } from "./base/landlord.service.base";

@Injectable()
export class LandlordService extends LandlordServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
