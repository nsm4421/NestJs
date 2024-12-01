import { Injectable } from '@nestjs/common';
import { MovieEntity } from './entities/movie.entity';
import { CreateMovieDto } from './dto/create-movie.dto';
import { EditMovieDto } from './dto/edit-movie.dto';

@Injectable()
export class MoviesService {
  private movies: MovieEntity[] = [];

  fetchAll(): MovieEntity[] {
    return this.movies;
  }

  findById(id: string): MovieEntity {
    return this.movies.find((item) => item.id == id);
  }

  search(year: number, title: string): MovieEntity[] {
    return this.movies.filter(
      (item) => item.title.includes(title) || item.year == year
    );
  }

  create(dto: CreateMovieDto) {
    this.movies.push({
      id: 'new',
      ...dto,
    } as MovieEntity);
    return true;
  }

  edit(dto: EditMovieDto) {
    this.movies = this.movies.map((item) =>
      item.id == dto.id
        ? ({
            ...dto,
          } as MovieEntity)
        : item
    );
    return true;
  }

  deleteById(id: string) {
    this.movies = this.movies.filter((item) => item.id != id);
    return true;
  }
}
