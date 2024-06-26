/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { NotificationTypeService } from "../notificationType.service";
import { NotificationTypeCreateInput } from "./NotificationTypeCreateInput";
import { NotificationType } from "./NotificationType";
import { NotificationTypeFindManyArgs } from "./NotificationTypeFindManyArgs";
import { NotificationTypeWhereUniqueInput } from "./NotificationTypeWhereUniqueInput";
import { NotificationTypeUpdateInput } from "./NotificationTypeUpdateInput";

export class NotificationTypeControllerBase {
  constructor(protected readonly service: NotificationTypeService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: NotificationType })
  async createNotificationType(
    @common.Body() data: NotificationTypeCreateInput
  ): Promise<NotificationType> {
    return await this.service.createNotificationType({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [NotificationType] })
  @ApiNestedQuery(NotificationTypeFindManyArgs)
  async notificationTypes(
    @common.Req() request: Request
  ): Promise<NotificationType[]> {
    const args = plainToClass(NotificationTypeFindManyArgs, request.query);
    return this.service.notificationTypes({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: NotificationType })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async notificationType(
    @common.Param() params: NotificationTypeWhereUniqueInput
  ): Promise<NotificationType | null> {
    const result = await this.service.notificationType({
      where: params,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: NotificationType })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateNotificationType(
    @common.Param() params: NotificationTypeWhereUniqueInput,
    @common.Body() data: NotificationTypeUpdateInput
  ): Promise<NotificationType | null> {
    try {
      return await this.service.updateNotificationType({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: NotificationType })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteNotificationType(
    @common.Param() params: NotificationTypeWhereUniqueInput
  ): Promise<NotificationType | null> {
    try {
      return await this.service.deleteNotificationType({
        where: params,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
