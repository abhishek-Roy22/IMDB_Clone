import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router-dom';

const MovieCast = () => {
  const { id } = useParams();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['case'],
    queryFn: () =>
      fetch(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=a29ead76abab425e1432adf6143f8c5f`
      ).then((res) => res.json()),
  });

  if (isLoading) return 'Loading...';
  if (isError) return `Something went wrong: ${error.messages}`;

  return (
    <div className="mt-5 pb-10">
      <h2 className="text-black font-semibold font-sans text-2xl p-5">
        Top Billed Cast
      </h2>
      <div className="flex overflow-x-scroll no-scrollbar gap-3">
        {data?.cast?.slice(0, 20).map((c) => (
          <div
            key={c.id}
            className="min-w-card w-44 rounded-lg shadow-xl bg-slate-300 border border-gray-400 overflow-hidden flex flex-col"
          >
            {c.profile_path && (
              <img
                src={`https://image.tmdb.org/t/p/w185${c.profile_path}`}
                alt={c.id}
                className="w-full object-cover h-auto"
              />
            )}
            <span className="text-black text-base font-sans font-bold p-1">
              {c.name}
            </span>
            <span className=" text-black text-base font-sans p-1">
              {c.character}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieCast;
