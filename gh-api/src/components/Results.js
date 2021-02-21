import React from 'react';

const Results = (props) => {
  const { repos } = props;
  console.log(`Repos is:`, repos);

  // const repoList = repos.map((item) => {
  //   <li>{item.name}</li>
  // })

  return (
    <div>
      <table class="results-table">
      <tr>
        <th>id</th>
        <th>name</th>
        <th>description</th>
        <th>contributors</th>
      </tr>
      <tr>
        <td>01202</td>
        <td>firstrepo</td>
        <td>anya91m</td>
      </tr>
      </table>
    </div>
  );
};

export default Results;
