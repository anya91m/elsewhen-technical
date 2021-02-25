import React, {useState} from "react";

import { BrowserRouter,Switch, Route, Link } from "react-router-dom";
import SearchBar from './components/SearchBar';
import Contributors from './components/Contributors';

function App() {

  const [dUrl, setUrl] = useState('')

  const getNextUrl = (url) => {
    setUrl(url,()=>console.log(url))
  }

  return (
    <div>
      <BrowserRouter>
        <h2>GitHub Repo Finder</h2>

        <Switch>
          <Route exact path="/" >
            <SearchBar  getNextUrl={getNextUrl} />
          </Route>

          <Route exact path="/contributors" >
            <Contributors dUrl={dUrl} />
          </Route>
        </Switch>
    </BrowserRouter>
  </div>

  )
}

export default App;
