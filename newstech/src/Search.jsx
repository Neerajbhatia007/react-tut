import React from "react";
import { useGlobalContext } from "./context";

const Search = () => {
  const { query, searchPost } = useGlobalContext();
  return (
    <>
      
        <form>
          <div>
            <input
              type="text"
              placeholder="Search"
              value={query}
              onChange={(e) => searchPost(e.target.value)}
            />
          </div>
        </form>
    </>
  );
};

export default Search;
