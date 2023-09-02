"use client";
import { AiOutlineSearch } from "react-icons/ai";

interface SearchProps {}

const Search: React.FC<SearchProps> = () => {
  return (
    <div className="flex items-center gap-4">
      <AiOutlineSearch className="text-[24px] text-dark_grey" />
      <input type="text" placeholder="Search topic" className="p-2  w-full" />
    </div>
  );
};

export default Search;
