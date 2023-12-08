import Hero from '../components/Hero';
import MovieList from '../components/MovieList';
import Popular from '../components/Popular';
import Trending from '../components/Trending';

const DiscoverMovies = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="bg-hero-section bg-no-repeat bg-cover bg-center h-96">
        <Hero />
      </div>
      <div className="block">
        <Trending />
      </div>
      <div className="block">
        <Popular />
      </div>
      <div className="block">
        <MovieList />
      </div>
    </div>
  );
};

export default DiscoverMovies;
