import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreatePostDto {
  @ApiProperty({
    example: 'Awesome JavaScript',
    description: 'post title',
  })
  @IsString({ message: 'Id should be a string' })
  readonly id: string;

  @ApiProperty({
    example: 'Awesome JavaScript',
    description: 'post title',
  })
  @IsString({ message: 'Title should be a string' })
  readonly title: string;

  @ApiProperty({
    example: 'JavaScript the best language ever!',
    description: 'post description',
  })
  @IsString({ message: 'Description should be a string' })
  readonly description: string;

  readonly userId: number;
}
