import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import Header from "./components/Header";

import Routes from "./routes";

function App() {
  return (
    <Router>
      <Header name="Header" />
      <Routes />
    </Router>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
