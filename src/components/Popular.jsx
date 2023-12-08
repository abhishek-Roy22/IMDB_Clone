import { useQuery } from '@tanstack/react-query';
import MovieCard from './MovieCard';
import { useState } from 'react';

const Popular = () => {
  const [query, setQuery] = useState('airing_today');

  const { data, isLoading, isError, error, isFetching } = useQuery({
    queryKey: ['popular'],
    queryFn: () =>
      fetch(
        `https://api.themoviedb.org/3/tv/${query}?api_key=a29ead76abab425e1432adf6143f8c5f`
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
      <div className="flex flex-col md:flex-row items-center gap-3">
        <h3 className="text-md sm:text-2xl font-serif font-semibold text-black mt-3 mb-3">
          {query.toLocaleUpperCase()} Tv Series
        </h3>
        <div className="sm:flex hidden justify-center border-2 overflow-hidden border-black rounded-2xl gap-4">
          <button
            className={`${
              query === 'airing_today' ? 'bg-[#032541] text-white' : ''
            } border-0 outline-none h-full sm:py-1 sm:px-3 ease-in duration-500 w-max text-sm sm:text-md`}
            onClick={() => setQuery('airing_today')}
            type="button"
          >
            Airing_Today
          </button>
          <button
            className={`${
              query === 'on_the_air' ? 'bg-[#032541] text-white' : ''
            } border-0 outline-none h-full sm:py-1 sm:px-3 ease-in duration-500 w-max text-sm sm:text-md`}
            onClick={() => setQuery('on_the_air')}
            type="button"
          >
            On_the_air
          </button>
          <button
            className={`${
              query === 'popular' ? 'bg-[#032541] text-white' : ''
            } border-0 outline-none h-full sm:py-1 sm:px-3 ease-in duration-500 w-max text-sm sm:text-md`}
            onClick={() => setQuery('popular')}
            type="button"
          >
            Popular
          </button>
          <button
            className={`${
              query === 'top_rated' ? 'bg-[#032541] text-white' : ''
            } border-0 outline-none h-full sm:py-1 sm:px-3 ease-in duration-500 w-max text-sm sm:text-md`}
            onClick={() => setQuery('top_rated')}
            type="button"
          >
            Top_rated
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

export default Popular;
