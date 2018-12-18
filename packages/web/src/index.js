import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { default as WebSite } from "./pages";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<WebSite />, document.getElementById("root"));
serviceWorker.register();
