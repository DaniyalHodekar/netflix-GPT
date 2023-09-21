import { useSelector } from "react-redux";
import MovieList from "./MovieList";

export default function SecondaryContainer() {
  const nowPlaying = useSelector((store) => store.movie.nowPlaying);
  const popular = useSelector((store) => store.movie.popular);
  const topRated = useSelector((store) => store.movie.topRated);
  const upcoming = useSelector((store) => store.movie.upcoming);
  return (
    <section className="relative">
      <div className="-mt-72 lg:-mt-48 relative z-10">
        {nowPlaying ? (
          <MovieList title={"Now Playing"} movies={nowPlaying} />
        ) : null}
        {popular ? <MovieList title={"Popular"} movies={popular} /> : null}
        {topRated ? <MovieList title={"Top Rated"} movies={topRated} /> : null}
        {upcoming ? <MovieList title={"Upcoming"} movies={upcoming} /> : null}
      </div>
      <div className="bg-image absolute inset-0 -z-30"></div>
    </section>
  );
}
