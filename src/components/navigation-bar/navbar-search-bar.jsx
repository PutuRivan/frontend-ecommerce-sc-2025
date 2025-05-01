import { Search } from 'lucide-react';
import React from 'react';

const SearchBar = () => {
  return (
    <div className="relative">
      <input
        placeholder="Search..."
        className="p-2 rounded-xl w-full border-base-100 text-white"
      />
      <button className="absolute inset-y-0 right-0 flex items-center pr-3">
        <Search size={24} />
      </button>
    </div>
  );
};

export default SearchBar;
