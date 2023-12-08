import { useQuery } from '@tanstack/react-query';
import MovieCard from './MovieCard';
import { useState } from 'react';

const Trending = () => {
  const [query, setQuery] = useState('day');

  const { data, isLoading, isError, error, isFetching } = useQuery({
    queryKey: ['trending'],
    queryFn: () =>
      fetch(
        `https://api.themoviedb.org/3/trending/movie/${query}?api_key=a29ead76abab425e1432adf6143f8c5f`
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
    <div className="mt-3 mb-3 p-4">
      <div className="flex items-center gap-3">
        <h3 className="text-md sm:text-2xl text-center font-serif font-semibold text-black mt-3 mb-3">
          Trending
        </h3>
        <div className="sm:flex hidden items-center justify-center border-2 overflow-hidden border-black rounded-2xl gap-4">
          <button
            className={`${
              query === 'day' ? 'bg-[#032541] text-white' : ''
            } border-0 outline-none h-full sm:py-1 sm:px-3 ease-in duration-500 w-max text-sm sm:text-md`}
            onClick={() => setQuery('day')}
            type="button"
          >
            Today
          </button>
          <button
            className={`${
              query === 'week' ? 'bg-[#032541] text-white' : ''
            } border-0 outline-none h-full sm:py-1 sm:px-3 ease-in duration-500 w-max text-sm sm:text-md`}
            onClick={() => setQuery('week')}
            type="button"
          >
            This Week
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

export default Trending;
