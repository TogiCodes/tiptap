import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Redirect, Route, NavLink } from "react-router-dom";

import { Tiptap } from "./components";

import { BASIC_CONTENT } from "./data";

import "./index.scss";

render(
  <BrowserRouter>
    <div id="Wrapper">
      <Route exact path="/">
        <Redirect to="/basic" />
      </Route>
      <Route path="/basic">
        <Tiptap
          content={BASIC_CONTENT}
          withToolbar={true}
          withTaskListExtension={true}
          withLinkExtension={true}
          withEmojiSuggestion={true}
        />
      </Route>
    </div>
  </BrowserRouter>,
  document.getElementById("root")
);
