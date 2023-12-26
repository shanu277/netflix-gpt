import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  console.log(movies);
  return (
    <div className=" bg-black">
      <div className="-mt-32 relative z-20 pl-12">
        <MovieList
          title={"Now Playing"}
          movies={movies.nowPlayingMovies}
        ></MovieList>
        <MovieList
          title={"Popular"}
          movies={movies.popularMovies}
        ></MovieList>
        <MovieList
          title={"Top Rated"}
          movies={movies.topRatedMovies}
        ></MovieList>
      </div>
    </div>
  );
};

export default SecondaryContainer;
