import React from "react";
import { Route, IndexRedirect } from 'react-router'

import MainContainer from "../containers/MainContainer";
import UserContainer from "../containers/UserContainer";
import Page1 from "../screens/Page1";
import Page2 from "../screens/Page2";
import Login from "../screens/Login";
import Logout from "../screens/Logout";
import NotFound from "../screens/NotFound";

export default (
  <Route path="/" component={MainContainer}>
    <IndexRedirect to="/page1"/>

    <Route name="Login" path="login" component={Login}/>

    <Route component={UserContainer}>
      <Route name="Logout" path="logout" component={Logout}/>
      <Route name="Page1" path="page1" component={Page1}/>
      <Route name="Page2" path="page2" component={Page2}/>
    </Route>

    <Route path="*" component={NotFound}/>

  </Route>
);









