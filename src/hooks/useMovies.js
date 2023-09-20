import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";

export default function useMovies() {
  const movies = useSelector((store) => store.movie.nowPlaying);
  const dispatch = useDispatch();

  let getNowPlaying = async () => {
    try {
      let res = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
        {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMTM5YWYzMDMyN2QxNDQ4YWJmZGJlNjQ2YmMyYzA3OSIsInN1YiI6IjYzNjY3YTkxZTdjMDk3MDA3YWViNTZlNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5L008QaY-MyWv7orE3tSsKN74QvQgzjA6I670xIca8M",
          },
        }
      );
      let data = await res.json();
      //   console.log(data);
      dispatch(addNowPlayingMovies(data.results));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (movies) return;
    getNowPlaying();
  }, []);
}
