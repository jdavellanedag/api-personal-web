import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { BlogListInput } from './schema/blog.inputs';
import { Blog, BlogDocument } from './schema/blog.schema';

@Injectable()
export class BlogService {
  constructor(
    @InjectModel(Blog.name)
    private blogModel: Model<BlogDocument>,
  ) {}

  blogById(id: string) {
    return this.blogModel.findById(new Types.ObjectId(id)).exec();
  }

  blog(title: string) {
    return this.blogModel.findOne({ Title: title }).exec();
  }

  list(filters: BlogListInput) {
    return this.blogModel.find({ ...filters }).exec();
  }

  latest() {
    return this.blogModel.find().sort({ Date: -1 }).limit(2).exec();
  }
}
