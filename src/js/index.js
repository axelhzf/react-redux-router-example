import style from "../css/main.css"
import fa from "font-awesome/css/font-awesome.css";

import polyfill from "babel-polyfill";

import React from "react";
import ReactDom from "react-dom";

import App from "./containers/App";

ReactDom.render(<App/>, document.getElementById("container"));