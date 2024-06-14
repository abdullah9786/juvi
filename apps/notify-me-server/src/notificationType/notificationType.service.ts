import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { NotificationTypeServiceBase } from "./base/notificationType.service.base";

@Injectable()
export class NotificationTypeService extends NotificationTypeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
