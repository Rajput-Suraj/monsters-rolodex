import React from "react";
import "./SearchBox.css";

const SearchBox = ({ placeholder, handleSearch }) => {
    return (
        <input
            className="search"
            type="search"
            onChange={handleSearch}
            placeholder={placeholder}
        />
    );
};

export default SearchBox;
