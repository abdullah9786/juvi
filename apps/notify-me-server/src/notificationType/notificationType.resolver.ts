import * as graphql from "@nestjs/graphql";
import { NotificationTypeResolverBase } from "./base/notificationType.resolver.base";
import { NotificationType } from "./base/NotificationType";
import { NotificationTypeService } from "./notificationType.service";

@graphql.Resolver(() => NotificationType)
export class NotificationTypeResolver extends NotificationTypeResolverBase {
  constructor(protected readonly service: NotificationTypeService) {
    super(service);
  }
}
