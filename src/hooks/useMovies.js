import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addNowPlayingMovies,
  addPopularMovies,
  addTopRatedMovies,
  addUpcomingMovies,
} from "../utils/movieSlice";
import { MOVIE_APIS } from "../utils/constants";

export default function useMovies() {
  const movies = useSelector((store) => store.movie.nowPlaying);
  const dispatch = useDispatch();
  let actions = [
    addNowPlayingMovies,
    addPopularMovies,
    addTopRatedMovies,
    addUpcomingMovies,
  ];

  let getNowPlaying = async (API, action) => {
    try {
      let res = await fetch(API, {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMTM5YWYzMDMyN2QxNDQ4YWJmZGJlNjQ2YmMyYzA3OSIsInN1YiI6IjYzNjY3YTkxZTdjMDk3MDA3YWViNTZlNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5L008QaY-MyWv7orE3tSsKN74QvQgzjA6I670xIca8M",
        },
      });
      let data = await res.json();
      //   console.log(data);
      dispatch(action(data.results));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (movies) return;
    for (let i = 0; i < MOVIE_APIS.length; i++) {
      getNowPlaying(MOVIE_APIS[i], actions[i]);
    }
  }, []);
}
