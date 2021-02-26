import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

const Results = (props) => {

  const { repositories } = props;
  console.log(`Repos is:`, repositories);

  const handleClick = (e)=>{
    props.getNextUrl(e.target.id)
    props.history.push('/contributors')
  }

  const repoList = repositories.length !== 0 ? (
    repositories.map((repo) =>
      <tr>
        <td>{repo.id}</td>
        <td>{repo.name}</td>
        <td>{repo.description}</td>
        <td id={repo.contributors_url} onClick={handleClick}>View Contributors</td>
      </tr>
  )
    ) : (
      <td>No repo found</td>
  );

  return (
   <>
    <div>
      <table class="results-table">
        <tr>
          <th>id</th>
          <th>name</th>
          <th>description</th>
          <th>contributors</th>
        </tr>
        <tr>
          <td>{repoList}</td>
        </tr>
      </table>
    </div>
  </>
  );
};

export default withRouter(Results);
