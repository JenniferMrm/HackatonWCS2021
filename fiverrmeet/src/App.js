import React from "react";
import Main from "./layout/Main";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App(props) {
  return (
    <Router>
      <Switch>
        <div>
          <Main></Main>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
