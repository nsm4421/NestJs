import { PartialType } from '@nestjs/mapped-types';
import { IsString } from 'class-validator';
import { CreateMovieDto } from './create-movie.dto';

export class EditMovieDto extends PartialType(CreateMovieDto) {
  @IsString() readonly id: string;
}
