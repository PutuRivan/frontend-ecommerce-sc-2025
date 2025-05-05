import { Search } from 'lucide-react';
import React, { useRef } from 'react';
import { useNavigate } from 'react-router';

const SearchBar = () => {
  const ref = useRef();
  const navigate = useNavigate();
  const handleSearch = (e) => {
    const keyword = ref.current.value;

    if (!keyword || keyword.trim() === '') return;

    if (e.key === 'Enter' || e.type === 'click') {
      e.preventDefault();
      navigate(`/search/${keyword}`);
      ref.current.value = '';
    }
  };
  return (
    <div className="relative">
      <input
        placeholder="Search..."
        className="p-2 rounded-xl w-full border-base-100 text-white"
        ref={ref}
        onKeyDown={handleSearch}
      />
      <button
        onClick={handleSearch}
        className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
      >
        <Search size={24} />
      </button>
    </div>
  );
};

export default SearchBar;
