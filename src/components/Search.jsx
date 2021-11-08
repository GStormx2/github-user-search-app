import React from 'react';
import search_logo from '../assets/search.svg';

const Search = () => {
    return (
        <div className="flex justify-between items-center bg-app-card-light p-2 rounded-lg shadow-lg">
            <div className="flex items-center gap-7">
                <img src={search_logo} alt="search logo"></img>
                <input className="text-search w-96" ></input>
                
            </div>
            <div className="flex items-center">
                <p className="text-red-600 font-bold text-h3 mr-5">No Result</p>
                <div className="bg-app-blue p-4 text-h3 font-bold text-white rounded-lg">Search</div>
            </div>
        </div>
    );
}

export default Search;