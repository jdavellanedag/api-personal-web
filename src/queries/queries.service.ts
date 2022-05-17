import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Portfolio, PortfolioDocument } from './schema/portfolio.schema';
import { Link, LinkDocument } from './schema/link.schema';
import { Skill, SkillDocument } from './schema/skill.schema';

@Injectable()
export class QueriesService {
  constructor(
    @InjectModel(Portfolio.name)
    private portfolioModel: Model<PortfolioDocument>,
    @InjectModel(Link.name)
    private linkModel: Model<LinkDocument>,
    @InjectModel(Skill.name)
    private skillModel: Model<SkillDocument>,
  ) {}

  async findPortfolio(): Promise<Portfolio[]> {
    return this.portfolioModel.find().exec();
  }

  async findLink(): Promise<Link[]> {
    return this.linkModel.find().exec();
  }

  async findLinkByTitle(title: string): Promise<Link> {
    return this.linkModel.findOne({ title: title }).exec();
  }

  async findSkill(): Promise<Skill[]> {
    return this.skillModel.find().exec();
  }
}
