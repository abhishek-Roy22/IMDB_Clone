import { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-between items-center mt-8 w-full bg-white p-2 rounded-3xl"
    >
      <input
        type="text"
        onChange={(e) => setSearchTerm(e.target.value)}
        value={searchTerm}
        placeholder="Search..."
        className=" bg-transparent w-full border-none outline-none text-gray-400 placeholder:text-gray-400 font-bold"
      />
      <AiOutlineSearch className="text-teal-600 font-bold cursor-pointer w-5 h-5" />
    </form>
  );
};

export default SearchBar;
