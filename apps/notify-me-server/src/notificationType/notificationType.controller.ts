import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { NotificationTypeService } from "./notificationType.service";
import { NotificationTypeControllerBase } from "./base/notificationType.controller.base";

@swagger.ApiTags("notificationTypes")
@common.Controller("notificationTypes")
export class NotificationTypeController extends NotificationTypeControllerBase {
  constructor(protected readonly service: NotificationTypeService) {
    super(service);
  }
}
