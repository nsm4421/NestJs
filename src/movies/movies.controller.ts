import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { MoviesService } from './movies.service';

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
  create(@Body() data) {
    return this.movieService.create(data);
  }

  @Patch('/:id')
  edit(@Param('id') id: string, @Body() data) {
    console.log(data);
    return `edit ${id}`;
  }

  @Delete('/:id')
  deleteById(@Param('id') id: string) {
    return this.movieService.deleteById(id);
  }
}
