import { Injectable } from '@nestjs/common';
import { MovieEntity } from './entities/movie.entity';

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

  create({ id, title, year }: { id: string; title: string; year: number }) {
    this.movies.push({
      id: 'new',
      title,
      year,
    } as MovieEntity);
    return true;
  }

  edit({ id, title, year }: { id: string; title: string; year: number }) {
    this.movies = this.movies.map((item) =>
      item.id == id
        ? ({
            id: 'new',
            title,
            year,
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
