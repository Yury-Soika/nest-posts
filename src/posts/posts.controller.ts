import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { PostsService } from './posts.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Post as PostModel } from './posts.model';

@ApiTags('Posts')
@Controller('posts')
export class PostsController {
  constructor(private postService: PostsService) {}

  @ApiOperation({ summary: 'Create post' })
  @ApiResponse({ status: 200, type: PostModel })
  @Post()
  createPost(@Body() dto: CreatePostDto) {
    return this.postService.create(dto);
  }

  @ApiOperation({ summary: 'Get all posts' })
  @ApiResponse({ status: 200, type: [PostModel] })
  @Get()
  getAllPosts() {
    return this.postService.getAllPosts();
  }

  @ApiOperation({ summary: 'Get post by id' })
  @ApiResponse({ status: 200, type: PostModel })
  @Get('/:id')
  getPostById(@Param('id') id: string) {
    return this.postService.getPostById(id);
  }

  @ApiOperation({ summary: 'Delete post by id' })
  @ApiResponse({ status: 200, type: PostModel })
  @Delete(':id')
  async deleteResource(@Param('id') id: string) {
    return this.postService.deletePostById(id);
  }
}
