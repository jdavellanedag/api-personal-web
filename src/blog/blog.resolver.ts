import { Args, Query, Resolver } from '@nestjs/graphql';
import { BlogService } from './blog.service';
import { BlogListInput } from './schema/blog.inputs';
import { Blog } from './schema/blog.schema';

@Resolver(() => Blog)
export class BlogResolver {
  constructor(private blogService: BlogService) {}

  @Query(() => [Blog])
  async blogs(@Args('filters', { nullable: true }) filters?: BlogListInput) {
    return await this.blogService.list(filters);
  }

  @Query(() => Blog)
  async blog(@Args('title', { type: () => String }) title: string) {
    return await this.blogService.blog(title);
  }

  @Query(() => Blog)
  async blogById(@Args('_id', { type: () => String }) id: string) {
    return await this.blogService.blogById(id);
  }

  @Query(() => [Blog])
  async blogLatest() {
    return await this.blogService.latest();
  }
}
