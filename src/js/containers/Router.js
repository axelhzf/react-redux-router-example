import React from "react";
import ReactDom from "react-dom";
import { Router, Route, Link, browserHistory } from 'react-router'
import createBrowserHistory from "history/lib/createBrowserHistory";

import Wrapper from "./Wrapper";
import Page1 from "./Page1";
import Page2 from "./Page2";

export default () => {

  return (
    <Router history={browserHistory}>
      <Route path="/" component={Wrapper} >
        <Route path="page1" component={Page1}/>
        <Route path="page2" component={Page2}/>
      </Route>
    </Router>
  )
}
