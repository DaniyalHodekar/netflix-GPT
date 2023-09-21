import { Link } from "react-router-dom";

export default function MovieList({ movies, title }) {
  return (
    <section className="first:bg-gradient-to-t from-black/70 via-black to-transparent first:bg-transparent bg-black/70 py-8 xl:px-24">
      <h2 className="ml-6 text-3xl lg:text-4xl font-bold">{title}</h2>
      <div className="p-6 flex gap-4 md:gap-6 overflow-x-auto items-center">
        {movies.map((movie) => {
          return <MovieCard key={movie.id} movie={movie} />;
        })}
      </div>
    </section>
  );
}

function MovieCard({ movie }) {
  return (
    <div className="flex-grow min-w-fit rounded overflow-hidden hover:scale-105 transition-transform">
      <Link to={"/movie/" + movie.id}>
        <img
          src={"https://image.tmdb.org/t/p/w200/" + movie.poster_path}
          alt="movie poster"
        />
      </Link>
    </div>
  );
}
