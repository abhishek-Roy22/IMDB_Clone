import React from 'react';
import { RxAvatar } from 'react-icons/rx';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="w-full h-16 bg-[#032541] flex items-center justify-between p-2 sticky top-0">
      <Link to="/" className="text-3xl text-slate-200 font-bold font-serif p-4">
        MovieWatcher
      </Link>

      <RxAvatar className="text-gray-400 font-bold text-2xl cursor-pointer hover:text-white" />
    </div>
  );
};

export default Navbar;
