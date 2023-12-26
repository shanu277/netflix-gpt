import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  console.log(movies);
  if (!movies) return;
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold py-6 text-white">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {movies.map((movie) => (
            <MovieCard key={movie.id} imgPath={movie.poster_path}></MovieCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
