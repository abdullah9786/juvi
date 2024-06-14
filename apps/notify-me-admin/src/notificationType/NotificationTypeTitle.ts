import { NotificationType as TNotificationType } from "../api/notificationType/NotificationType";

export const NOTIFICATIONTYPE_TITLE_FIELD = "id";

export const NotificationTypeTitle = (record: TNotificationType): string => {
  return record.id?.toString() || String(record.id);
};
