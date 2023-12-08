import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import MovieCast from '../components/MovieCast';
import Recommendation from '../components/Recommendation';
import Reviews from '../components/Reviews';

const MovieDetails = () => {
  const { id } = useParams();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['detail'],
    queryFn: () =>
      fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=a29ead76abab425e1432adf6143f8c5f`
      ).then((res) => res.json()),
  });

  const fullPath = `https://image.tmdb.org/t/p/w342${data?.poster_path}`;
  const backgroundImage = `https://image.tmdb.org/t/p/original${data?.poster_path}`;

  if (isLoading) return 'Loading...';
  if (isError) return `Something went Wrong: ${error.message}`;

  return (
    <>
      <div
        className="w-full mx-auto h-[300px] sm:h-[500px] flex items-center justify-center p-5 font-serif bg-no-repeat bg-cover object-cover"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <div className="hidden sm:flex flex-col md:flex-row gap-5 w-4/5">
          <img src={fullPath} alt="Movie_poster" width={300} height={350} className='w-[300] min-h-[200px] sm:h-[350px]'/>
          <div className="flex flex-col items-start gap-10">
            <h1 className="text-white font-bold font-mono text-sm sm:text-3xl">
              {data.original_title}
            </h1>
            <div className="flex gap-2">
              <span className="text-gray-400 font-semibold">
                {data.release_date}.
              </span>
              {data?.genres?.map((genre) => (
                <span
                  className="flex gap-2 text-gray-400 font-semibold"
                  key={genre.id}
                >
                  {genre.name}
                </span>
              ))}
            </div>
            <span className="block text-white text-2xl font-normal">
              {data.tagline}
            </span>
            <div className="flex flex-col">
              <h3 className="text-2xl text-white font-bold">Overview</h3>
              <span className=" text-gray-200 font-sans">{data.overview}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto">
        <MovieCast />
        <Reviews />
        <Recommendation />
      </div>
    </>
  );
};

export default MovieDetails;
