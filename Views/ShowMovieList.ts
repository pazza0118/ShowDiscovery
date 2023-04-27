import { MovieList } from "../Models/MovieList";
import { ShowModelList } from "./ShowModelList";
import { MovieProps } from "../Helper/helper";

export class ShowMovieList extends ShowModelList<MovieList, MovieProps>{
  baseUrl: string = "https://image.tmdb.org/t/p/original";
  template = (movieAttr: MovieProps):string => {
    const { title, date, poster_path } = movieAttr;
    const posterUrl = this.baseUrl + poster_path;
    return `
      <h3>${title}</h3>
      <h4>${date}</h4>
      <img src=${posterUrl}>
    `;
  };

}