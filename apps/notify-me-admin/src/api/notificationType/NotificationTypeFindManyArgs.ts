import { NotificationTypeWhereInput } from "./NotificationTypeWhereInput";
import { NotificationTypeOrderByInput } from "./NotificationTypeOrderByInput";

export type NotificationTypeFindManyArgs = {
  where?: NotificationTypeWhereInput;
  orderBy?: Array<NotificationTypeOrderByInput>;
  skip?: number;
  take?: number;
};
