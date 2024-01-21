import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Post } from './posts.model';

@Injectable()
export class PostsService {
  constructor(@InjectModel(Post) private postRepository: typeof Post) {}

  async create(dto: CreatePostDto) {
    return this.postRepository.create(dto);
  }

  async getAllPosts() {
    return this.postRepository.findAll({ include: { all: true } });
  }

  async getPostById(id: string) {
    return this.postRepository.findOne({
      where: { id },
      include: { all: true },
    });
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
