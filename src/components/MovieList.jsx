export default function MovieList({ movies }) {
  return (
    <div className="p-6 bg-black">
      {movies.map((movie) => {
        return <p key={movie.id}>{movie.original_title}</p>;
      })}
    </div>
  );
}
