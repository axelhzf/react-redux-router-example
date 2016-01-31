import style from "../css/main.css"
import fa from "font-awesome/css/font-awesome.css";
import polyfill from "babel-polyfill";

import React from "react";
import ReactDom from "react-dom";
import {Provider} from "react-redux";
import { Router, browserHistory } from 'react-router'
import store from "./store"
import DevTools from "./utils/DevTools";
import routes from "./routes"

class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <div>
          <Router history={browserHistory}>{routes}</Router>
          <DevTools/>
        </div>
      </Provider>
    )
  }

}

ReactDom.render(<App/>, document.getElementById("container"));