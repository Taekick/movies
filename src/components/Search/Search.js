import React from 'react';
import './Search.scss';

const Search = ({ handleInput, search }) => {
    return (
        <>
            <input type="text"
                placeholder="search the movie"
                className="searchBox"
                onChange={handleInput}
                onKeyPress={search}
            />
        </>
    )
}

export default Search;
