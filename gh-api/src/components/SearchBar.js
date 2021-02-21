import React, { useState } from 'react';
import Results from './Results'


const SearchBar = () => {

  const [searchInput, setSearchInput] = useState ('');
  const [repos, setRepos] = useState([]);

  const handleChange = (event) => {
    setSearchInput(event.target.value)
  }

  const handleClick = async () => {

    const result = () => {
      fetch(`https://api.github.com/orgs/${searchInput}/repos`)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        })
        .catch((err) => console.log(err));
    }

    setRepos(result);
  };

  return (
    <>
    <div>
      <input
        type="text"
        placeholder="Search for a GitHub repo"
        className="form-control form-search"
        value={searchInput}
        onChange={handleChange}
      />
      <button onClick={handleClick}>Fetch</button>
    </div>
    <Results />
    </>
  );
};

export default SearchBar;
