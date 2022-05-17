import { Controller, Get, Param } from '@nestjs/common';
import { QueriesService } from './queries.service';
import { Link } from './schema/link.schema';
import { Portfolio } from './schema/portfolio.schema';
import { Skill } from './schema/skill.schema';

@Controller('queries')
export class QueriesController {
  constructor(private queriesService: QueriesService) {}

  @Get('portfolio')
  async findPortfolio(): Promise<Portfolio[]> {
    const result = await this.queriesService.findPortfolio();
    return result;
  }

  @Get('link')
  async findLink(): Promise<Link[]> {
    const result = await this.queriesService.findLink();
    return result;
  }

  @Get('link/:title')
  async findLinkByTitle(@Param('title') title: string): Promise<Link> {
    const result = await this.queriesService.findLinkByTitle(title);
    return result;
  }

  @Get('skill')
  async findSkill(): Promise<Skill[]> {
    const result = await this.queriesService.findSkill();
    return result;
  }
}
