import React from "react";
import Main from "./layout/Main";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Welcome from "./view/welcome/Welcome";
import Login from "./view/login/Login";
import Accueil from "./view/accueil/Accueil";
import JeCherche from "./view/jeCherche/JeCherche";
import JeSuis from "./view/jeSuis/JeSuis";
import SwipeJC from "./view/swipeJeCherche/SwipeJC";
import SwipeJS from "./view/swipeJeSuis/SwipeJS";
import Message from "./view/message/Message";

function App() {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <Main>
              <Welcome />
            </Main>
          )}
        />
        <Route
          exact
          path="/login"
          render={() => (
            <Main>
              <Login />
            </Main>
          )}
        />
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
          path="/lookingFor"
          render={() => (
            <Main>
              <JeCherche />
            </Main>
          )}
        />
        <Route
          exact
          path="/iCanHelp"
          render={() => (
            <Main>
              <JeSuis />
            </Main>
          )}
        />
        <Route
          exact
          path="/swipeLookingFor"
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
          path="/sendMessage"
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
