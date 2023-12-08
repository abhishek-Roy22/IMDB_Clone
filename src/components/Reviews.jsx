import React from 'react';
import { format } from 'date-fns';
import { BsFillStarFill } from 'react-icons/bs';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

const Reviews = () => {
  const { id } = useParams();

  const { data, isError, isLoading, error } = useQuery({
    queryKey: ['review'],
    queryFn: () =>
      fetch(
        `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=a29ead76abab425e1432adf6143f8c5f`
      ).then((res) => res.json()),
  });

  if (isLoading) return 'Loading...';
  if (isError) return `Something went wrong: ${error.messages}`;

  return (
    <div className="mt-5 pb-10 flex flex-col gap-5">
      <h2 className="text-black font-semibold font-sans text-2xl p-5">
        Reviews
      </h2>
      {data?.results?.map((result) => (
        <div
          key={result.author}
          className="flex gap-5 border border-gray-400 rounded-xl shadow-lg p-10"
        >
          <div className="w-10 h-10 rounded-lg bg-black flex items-center justify-center gap-1 p-2">
            <BsFillStarFill className="text-white" />
            <span className="text-white">{result.author_details.rating}</span>
          </div>
          <div className="flex flex-1 flex-col justify-start items-start">
            <h2 className=" text-lg text-black font-bold font-sans">
              A review by {result.author}
            </h2>
            <p className="font-thin pb-5">
              Written by {result.author} on{' '}
              {format(new Date(parseInt(result.created_at)), 'do MMMM Y')}
            </p>
            <p className='text-start text-sm sm:text-md'>{result.content.slice(0, 200)}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
