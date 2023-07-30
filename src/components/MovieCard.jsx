import React from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';

const MovieCard = ({ movie }) => {
  const { poster_path, original_title, original_name, vote_average } = movie;

  const fullPath = `https://image.tmdb.org/t/p/w500${poster_path}`;

  return (
    <div className="min-w-card w-40 rounded-lg overflow-hidden">
      <Link to={`movieDetails/${movie.id}`}>
        <img src={fullPath} alt="img" className="object-cover w-full" />
        <p className="font-sans font-semibold text-black text-start">
          {original_title || original_name}
        </p>
        <p className="font-sans text-gray-500">
          {format(
            new Date(parseInt(movie.release_date || movie.first_air_date)),
            'do MMMM Y'
          )}
        </p>
        <p className="font-sans text-gray-500">
          Rating: <strong>{vote_average}</strong>
        </p>
      </Link>
    </div>
  );
};

export default MovieCard;
