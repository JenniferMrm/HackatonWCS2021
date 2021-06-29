import React from "react";
import JeCherche from "./view/jeCherche/JeCherche";
import SwipeJC from "./view/swipeJeCherche/SwipeJC";

function App(props) {
  return (
    <div>
      <SwipeJC />
      <JeCherche />
    </div>
  );
}

export default App;
