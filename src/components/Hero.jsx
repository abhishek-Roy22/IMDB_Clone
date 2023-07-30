import React from 'react';
import SearchBar from './SearchBar';

const Hero = () => {
  return (
    <div className="flex flex-col h-full items-start justify-center p-10 gap-2 md:mb-4">
      <h1 className=" text-5xl text-white font-semibold font-mono">Welcome.</h1>
      <p className="text-white font-mono font-normal text-3xl">
        Millions of movies, TV shows and people to discover. Explore now.
      </p>
      <SearchBar />
    </div>
  );
};

export default Hero;
