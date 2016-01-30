import React from "react";
import ReactDom from "react-dom";
import {Provider} from "react-redux";

import store from "../model/store"
import DevTools from "./DevTools";
import Router from "./Router";

export default class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <div>
          <Router/>
          <DevTools/>
        </div>
      </Provider>
    )
  }

}



