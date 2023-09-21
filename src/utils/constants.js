export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMTM5YWYzMDMyN2QxNDQ4YWJmZGJlNjQ2YmMyYzA3OSIsInN1YiI6IjYzNjY3YTkxZTdjMDk3MDA3YWViNTZlNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5L008QaY-MyWv7orE3tSsKN74QvQgzjA6I670xIca8M",
  },
};

export const VIDEO_API = "https://api.themoviedb.org/3/movie/";

export const MOVIE_APIS = [
  "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
  "https://api.themoviedb.org/3/movie/popular?language=en-US&page=2",
  "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
  "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
];
