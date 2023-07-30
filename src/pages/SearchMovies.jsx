import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router-dom';
import MovieCard from '../components/MovieCard';

const SearchMovies = () => {
  const { searchTerm } = useParams();

  const { data, isError, isLoading, error } = useQuery({
    queryKey: ['search'],
    queryFn: () =>
      fetch(
        `https://api.themoviedb.org/3/search/movie?query=${searchTerm}&api_key=a29ead76abab425e1432adf6143f8c5f`
      ).then((res) => res.json()),
  });

  const str = searchTerm;

  if (isLoading) return 'Loading...';
  if (isError) return `Something went wrong ${error.message}`;

  return (
    <div className="flex flex-col gap-10 max-w-7xl mx-auto">
      <h3 className="text-2xl font-serif text-teal-800 mt-5">
        Search Result for{' '}
        <span className=" font-bold font-mono">
          {str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()}
        </span>{' '}
        Movies
      </h3>
      <div className="flex flex-wrap justify-center gap-4">
        {data?.results?.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
};

export default SearchMovies;
