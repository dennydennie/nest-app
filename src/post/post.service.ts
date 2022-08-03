import { Injectable } from '@nestjs/common';
import { PostDto } from './dto/post.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Post, PostDocument } from './schema/post.schema';

@Injectable({})
export class PostService {
  constructor(@InjectModel(Post.name) private postModel: Model<PostDocument>) {}

  async createPost(postDto: PostDto): Promise<Post> {
    const createdPost = new this.postModel(postDto);
    return createdPost.save();
  }

  async updatePost(postDto: PostDto, postId: string) {
    return this.postModel.updateOne({ postId }, postDto).exec();
  }

  async deletePost(postId: string) {
    return this.postModel.deleteOne({ postId }).exec();
  }

  async getAllPosts(): Promise<Post[]> {
    return this.postModel.find().exec();
  }

  async getPostById(postId: string) {
    return this.postModel.findOne({ postId }).exec();
  }
}
