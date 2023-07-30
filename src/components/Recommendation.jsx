import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router-dom';
import MovieCard from './MovieCard';

const Recommendation = () => {
  const { id } = useParams();

  const { data, isError, isLoading, error } = useQuery({
    queryKey: ['recommendation'],
    queryFn: () =>
      fetch(
        `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=a29ead76abab425e1432adf6143f8c5f`
      ).then((res) => res.json()),
  });

  if (isLoading) return 'Loading...';
  if (isError) return `Something went wrong: ${error.messages}`;

  return (
    <div className="mt-5 pb-10">
      <h2 className="text-black font-semibold font-sans text-2xl p-5">
        Recommendation
      </h2>
      <div className="flex overflow-x-scroll no-scrollbar gap-3">
        {data?.results?.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
};

export default Recommendation;
