"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _a = require("pg"), Pool = _a.Pool, Client = _a.Client;
var credentials = {
    user: "showDiscoveryPG",
    host: "showdiscovery.coj2v0yir0e3.eu-central-1.rds.amazonaws.com",
    database: "postgres",
    password: "oshiPG4:51",
    port: 5432,
};
// password: `${process.env.POSTGRESQL_PASSWORD}`,
console.log("".concat(process.env.POSTGRESQL_PASSWORD));
// const pool = new Pool(credentials)
// pool.query('SELECT NOW()', (err, res) => {
//   console.log(err, res)
//   pool.end()
// })
// const parentElement = document.querySelector("#movies");
// const movieList = new MovieList();
// movieList.event['eventName'] = "change"
// movieList.event['callback'] =  () => {
//   if (parentElement) {
//     console.log("callback being triggered")
//     const showMovieList = new ShowMovieList(parentElement, movieList);
//     showMovieList.renderModelList()
//   }
// };
// movieList.seed(1, movieList.getPopularMovies);
// axios
//   .get(
//     "https://api.themoviedb.org/3/movie/55?api_key=a09edf864e37d1e63cdc3a23482da11d"
//   )
//   .then((res) => {
//     console.log(res.data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
// axios
//   .get("https://image.tmdb.org/t/p/w500/3YzVtvNERQOIJXnrcWv3xhj5EMT.jpg")
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
// public models = [
//   {
//     title: "Pirates of India",
//     date: "2004-05-10",
//     poster_path: "/vV4vlD4ool5JSsS1rB82qjCF6z8.jpg",
//   },
//   {
//     title: "Pirates of Caribbean",
//     date: "2003-07-09",
//     poster_path: "/vV4vlD4ool5JSsS1rB82qjCF6z8.jpg",
//   },
//   {
//     title: "Pirates of Japan",
//     date: "2000-07-14",
//     poster_path: "/vV4vlD4ool5JSsS1rB82qjCF6z8.jpg",
//   },
// ];
