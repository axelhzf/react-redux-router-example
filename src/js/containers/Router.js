import React from "react";
import ReactDom from "react-dom";
import { Router, Route, Link, browserHistory } from 'react-router'
import createBrowserHistory from "history/lib/createBrowserHistory";

import Wrapper from "./Wrapper";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Login from "./Login";
import LoggedUserWrapper from "./LoggedUserWrapper";
import Logout from "./Logout";

export default () => {

  return (
    <Router history={browserHistory}>
      <Route name="App" path="/" component={Wrapper} >
        <Route name="Login" path="login" component={Login}/>

        <Route component={LoggedUserWrapper}>
          <Route name="Logout" path="logout" component={Logout}/>
          <Route name="Page1" path="page1" component={Page1}/>
          <Route name="Page2" path="page2" component={Page2}/>
        </Route>

      </Route>
    </Router>
  )
}
