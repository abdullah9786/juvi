/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Campaign } from "./Campaign";
import { CampaignCountArgs } from "./CampaignCountArgs";
import { CampaignFindManyArgs } from "./CampaignFindManyArgs";
import { CampaignFindUniqueArgs } from "./CampaignFindUniqueArgs";
import { DeleteCampaignArgs } from "./DeleteCampaignArgs";
import { CampaignService } from "../campaign.service";
@graphql.Resolver(() => Campaign)
export class CampaignResolverBase {
  constructor(protected readonly service: CampaignService) {}

  async _campaignsMeta(
    @graphql.Args() args: CampaignCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Campaign])
  async campaigns(
    @graphql.Args() args: CampaignFindManyArgs
  ): Promise<Campaign[]> {
    return this.service.campaigns(args);
  }

  @graphql.Query(() => Campaign, { nullable: true })
  async campaign(
    @graphql.Args() args: CampaignFindUniqueArgs
  ): Promise<Campaign | null> {
    const result = await this.service.campaign(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Campaign)
  async deleteCampaign(
    @graphql.Args() args: DeleteCampaignArgs
  ): Promise<Campaign | null> {
    try {
      return await this.service.deleteCampaign(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
