import { Module } from '@nestjs/common';
import { QueriesController } from './queries.controller';
import { QueriesService } from './queries.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Portfolio, PortfolioSchema } from './schema/portfolio.schema';
import { Link, LinkSchema } from './schema/link.schema';
import { Skill, SkillSchema } from './schema/skill.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Portfolio.name, schema: PortfolioSchema },
      { name: Link.name, schema: LinkSchema },
      { name: Skill.name, schema: SkillSchema },
    ]),
  ],
  controllers: [QueriesController],
  providers: [QueriesService],
})
export class QueriesModule {}
