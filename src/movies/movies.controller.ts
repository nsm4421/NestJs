import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { MoviesService } from './movies.service';
import { CreateMovieDto } from './dto/create-movie.dto';
import { EditMovieDto } from './dto/edit-movie.dto';

@Controller('movies')
export class MoviesController {
  constructor(readonly movieService: MoviesService) {}

  @Get()
  fetchAll() {
    return this.movieService.fetchAll();
  }

  @Get('/:id')
  findById(@Param('id') id: string) {
    return this.movieService.findById(id);
  }

  @Delete('/search')
  search(@Query('year') year: number, @Query('title') title: string) {
    return this.movieService.search((year = year), (title = title));
  }

  @Post()
  create(@Body() dto: CreateMovieDto) {
    return this.movieService.create(dto);
  }

  @Patch()
  edit(@Body() dto: EditMovieDto) {
    return this.movieService.edit(dto);
  }

  @Delete('/:id')
  deleteById(@Param('id') id: string) {
    return this.movieService.deleteById(id);
  }
}
