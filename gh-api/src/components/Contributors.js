import React, { useState, useEffect } from 'react';

const Contributors = (props) => {
  // console.log(props.dUrl)

  const [contributors, setContributors] = useState([]);

  useEffect(()=> {
    fetch(props.dUrl).then(response => response.json()).then((data) => {
        console.log(data)
        const result = data
        setContributors(result)
    });
  });

  const contrList = contributors.length !== 0 ? (
    contributors.map((contr) =>
      <tr>
        <td>{contr.id}</td>
        <td>{contr.login}</td>
    </tr>
    )
    ) : (
      <td>No repo found</td>
  );

  return (
    <div>
      <table class="results-table">
        <tr>
          <th>id</th>
          <th>login</th>
        </tr>
        <tr>
          <td>{contrList}</td>
        </tr>
      </table>
    </div>
  );
}

export default Contributors
