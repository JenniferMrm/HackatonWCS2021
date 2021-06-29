import React from "react";
import Main from "./layout/Main";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Welcome from "./view/welcome/Welcome";
import Login from "./view/login/Login";
import JeCherche from "./view/jeCherche/JeCherche";
import JeSuis from "./view/jeSuis/JeSuis";
import SwipeJC from "./view/swipeJeCherche/SwipeJC";
import SwipeJS from "./view/swipeJeSuis/SwipeJS";
import Message from "./view/message/Message";
import Accueil from "./view/accueil/Accueil";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={() => <Welcome />} />
        <Route exact path="/login" render={() => <Login />} />
        <Route
          exact
          path="/home"
          render={() => (
            <Main>
              <Accueil />
            </Main>
          )}
        />
        <Route
          exact
          path="/needHelp"
          render={() => (
            <Main>
              <JeCherche />
            </Main>
          )}
        />
        <Route
          exact
          path="/ICanHelp"
          render={() => (
            <Main>
              <JeSuis />
            </Main>
          )}
        />
        <Route
          exact
          path="/swipeNeedHelp"
          render={() => (
            <Main>
              <SwipeJC />
            </Main>
          )}
        />
        <Route
          exact
          path="/swipeICanHelp"
          render={() => (
            <Main>
              <SwipeJS />
            </Main>
          )}
        />
        <Route
          exact
          path="/message"
          render={() => (
            <Main>
              <Message />
            </Main>
          )}
        />
      </Switch>
    </Router>
  );
}

export default App;
