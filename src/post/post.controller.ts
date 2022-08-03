import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { PostDto } from './dto/post.dto';
import { PostService } from './post.service';

@Controller('/post')
export class PostController {
  constructor(private postService: PostService) {}

  @Post()
  createPost(@Body() postDto: PostDto) {
    return this.postService.createPost(postDto);
  }

  @Patch('/:postId')
  updatePost(@Body() postDto: PostDto, @Param('postId') postId: string) {
    return this.postService.updatePost(postDto, postId);
  }

  @Get()
  getAllPosts() {
    return this.postService.getAllPosts();
  }

  @Get('/:postId')
  getPostById(@Param('postId') postId: string) {
    return this.postService.getPostById(postId);
  }
  @Delete('/:postId')
  deletePost(@Param('postId') postId: string) {
    return this.postService.deletePost(postId);
  }
}
