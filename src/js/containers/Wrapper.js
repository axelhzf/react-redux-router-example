import React from "react";
import ReactDom from "react-dom";
import Breadcrumbs from "react-breadcrumbs";

export default (props) => {
  return (
    <div>
      <Breadcrumbs
        routes={props.routes}
        params={props.params}
        setDocumentTitle={true}
        separator=" / "
      />
      <h1>App!</h1>
      {props.children}
    </div>
  )
}