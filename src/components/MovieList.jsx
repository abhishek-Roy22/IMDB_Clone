import { useQuery } from '@tanstack/react-query';
import MovieCard from './MovieCard';
import { useState } from 'react';

const MovieList = () => {
  const [query, setQuery] = useState('now_playing');

  const { data, isLoading, isError, error, isFetching } = useQuery({
    queryKey: ['movieList'],
    queryFn: () =>
      fetch(
        `https://api.themoviedb.org/3/movie/${query}?api_key=a29ead76abab425e1432adf6143f8c5f`
      ).then((res) => res.json()),
  });

  if (isLoading)
    return (
      <span className="text-teal-950 font-bold text-3xl text-center">
        Loading...
      </span>
    );
  if (isError) return `An error has occurred: ${error.message}`;

  return (
    <div className="container m-3">
      <div className="flex items-center gap-3">
        <h3 className="text-2xl font-serif font-semibold text-black mt-3 mb-3">
          {query.toLocaleUpperCase()} Movies
        </h3>
        <div className="flex items-center justify-center border-2 overflow-hidden border-black rounded-2xl gap-4">
          <button
            className={`${
              query === 'now_playing' ? 'bg-[#032541] text-white' : ''
            } border-0 outline-none h-full py-1 px-3 ease-in duration-500`}
            onClick={() => setQuery('now_playing')}
            type="button"
          >
            Now_playing
          </button>
          <button
            className={`${
              query === 'popular' ? 'bg-[#032541] text-white' : ''
            } border-0 outline-none h-full py-1 px-3 ease-in duration-500`}
            onClick={() => setQuery('popular')}
            type="button"
          >
            Popular
          </button>
          <button
            className={`${
              query === 'top_rated' ? 'bg-[#032541] text-white' : ''
            } border-0 outline-none h-full py-1 px-3 ease-in duration-500`}
            onClick={() => setQuery('top_rated')}
            type="button"
          >
            Top_rated
          </button>
          <button
            className={`${
              query === 'upcoming' ? 'bg-[#032541] text-white' : ''
            } border-0 outline-none h-full py-1 px-3 ease-in duration-500`}
            onClick={() => setQuery('upcoming')}
            type="button"
          >
            Upcoming
          </button>
        </div>
      </div>
      {isFetching ? (
        <div className="text-teal-950 font-bold text-3xl text-center">
          Refreshing...
        </div>
      ) : null}
      <div className="flex overflow-x-scroll no-scrollbar gap-3">
        {data?.results?.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
