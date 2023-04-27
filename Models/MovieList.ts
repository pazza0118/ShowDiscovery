import axios from "axios";
import { ModelList } from "./ModelList";
import { MovieProps } from "../Helper/helper";


export class MovieList extends ModelList<MovieProps> {
  private apiKey:string = 'a09edf864e37d1e63cdc3a23482da11d';
  getPopularMovies = (pageNum:number):void => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${this.apiKey}&language=en-US&page=${pageNum}`
      )
      .then((res) => {
        for(let i = 0; i < 20; i++){
          const { original_title, release_date, poster_path } = res.data.results[i];
          this.attr.push({
            title: original_title,
            date: release_date,
            poster_path,
          });  
        }
        this.event['callback']()
      })
      .catch((err) => {
        console.log("failure")
        throw new Error(err);
      });
  };
}
