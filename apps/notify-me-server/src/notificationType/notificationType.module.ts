import { Module } from "@nestjs/common";
import { NotificationTypeModuleBase } from "./base/notificationType.module.base";
import { NotificationTypeService } from "./notificationType.service";
import { NotificationTypeController } from "./notificationType.controller";
import { NotificationTypeResolver } from "./notificationType.resolver";

@Module({
  imports: [NotificationTypeModuleBase],
  controllers: [NotificationTypeController],
  providers: [NotificationTypeService, NotificationTypeResolver],
  exports: [NotificationTypeService],
})
export class NotificationTypeModule {}
