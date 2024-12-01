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

@Controller('movies')
export class MoviesController {
  @Get()
  fetchAll() {
    return 'Fetch All';
  }

  @Get('/:id')
  findById(@Param('id') id: string) {
    return `find by ${id}`;
  }

  @Delete('/search')
  search(@Query('year') year: string, @Query('title') title: string) {
    return `search by ${title}(${year})`;
  }

  @Post()
  create(@Body() data) {
    console.log(data);
    return 'create';
  }

  @Patch('/:id')
  edit(@Param('id') id: String, @Body() data) {
    console.log(data);
    return `edit ${id}`;
  }

  @Delete('/:id')
  delete(@Param('id') id: String) {
    return `delete ${id}`;
  }
}
