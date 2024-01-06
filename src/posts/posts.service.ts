import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Post } from './posts.model';

@Injectable()
export class PostsService {
  constructor(@InjectModel(Post) private postRepository: typeof Post) {}

  async create(dto: CreatePostDto) {
    const post = await this.postRepository.create(dto);
    return post;
  }

  async getAllPosts() {
    const posts = await this.postRepository.findAll({ include: { all: true } });
    return posts;
  }

  async getPostById(id: string) {
    const post = await this.postRepository.findOne({
      where: { id },
      include: { all: true },
    });
    return post;
  }

  async deletePostById(id: string) {
    const post = await this.postRepository.findByPk(id);
    if (post) {
      await post.destroy();
      return post;
    }
    return null;
  }
}
