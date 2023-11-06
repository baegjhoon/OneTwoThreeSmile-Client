import React from "react";

import "../../../styles/css/components/atoms/button/Search.css";

function Search() {
  return (
    <>
      <form className="search" action="" autoComplete="on">
        <input
          className="lg:w-4000 md:w-64 sm:w-32 w-72 p-2 rounded-box border-2 border-base-200 focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none transition duration-200 ease-in-out"
          id="search"
          name="search"
          type="text"
          placeholder="What're we looking for ?"
        />
        <button className="btn btn-ghost btn-circle" type="submit">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </form>
    </>
  );
}

export default Search;
