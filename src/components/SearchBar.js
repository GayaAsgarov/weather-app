import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSearchTerm } from "../stores/SearchTerm";

const SearchBar = ({ getWeatherInfos }) => {
  const searchTerm = useSelector((state) => state.searchTerm.term);
  const dispatch = useDispatch();

  return (
    <div className="search-bar-section">
      <input
        type="text"
        placeholder="Enter City ... "
        value={searchTerm}
        onChange={(e) => dispatch(setSearchTerm(e.target.value))}
        onKeyDown={getWeatherInfos}
      />
    </div>
  );
};

export default SearchBar;
