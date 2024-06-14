/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  NotificationType as PrismaNotificationType,
} from "@prisma/client";

export class NotificationTypeServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.NotificationTypeCountArgs, "select">
  ): Promise<number> {
    return this.prisma.notificationType.count(args);
  }

  async notificationTypes<T extends Prisma.NotificationTypeFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.NotificationTypeFindManyArgs>
  ): Promise<PrismaNotificationType[]> {
    return this.prisma.notificationType.findMany<Prisma.NotificationTypeFindManyArgs>(
      args
    );
  }
  async notificationType<T extends Prisma.NotificationTypeFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.NotificationTypeFindUniqueArgs>
  ): Promise<PrismaNotificationType | null> {
    return this.prisma.notificationType.findUnique(args);
  }
  async createNotificationType<T extends Prisma.NotificationTypeCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.NotificationTypeCreateArgs>
  ): Promise<PrismaNotificationType> {
    return this.prisma.notificationType.create<T>(args);
  }
  async updateNotificationType<T extends Prisma.NotificationTypeUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.NotificationTypeUpdateArgs>
  ): Promise<PrismaNotificationType> {
    return this.prisma.notificationType.update<T>(args);
  }
  async deleteNotificationType<T extends Prisma.NotificationTypeDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.NotificationTypeDeleteArgs>
  ): Promise<PrismaNotificationType> {
    return this.prisma.notificationType.delete(args);
  }
}
