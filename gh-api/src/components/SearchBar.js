import React, { useState } from 'react';
import Results from './Results';

const SearchBar = (props) => {

  const [searchInput, setSearchInput] = useState ('');
  const [repositories, setRepositories] = useState([]);
  const [contrUrl, setContrUrl] = useState([]);

  const handleChange = (event) => {
    setSearchInput(event.target.value)
  }

  const handleClick = async () => {
    console.log(searchInput);

    const repoEndpoint = `https://api.github.com/orgs/${searchInput}/repos`
      fetch(repoEndpoint).then(response => response.json()).then((data) => {
        // console.log(data)
        const result = data
        // console.log(result)
      setRepositories(result)
      });
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
      <Results getNextUrl={props.getNextUrl} repositories={repositories} />
    </>
  );
};

export default SearchBar;
