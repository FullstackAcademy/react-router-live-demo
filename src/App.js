import React from "react";
import "./App.css";
import Home from "./Home";
import BrowserRouter from "./BrowserRouter";
import LinkNavLink from './LinkNavLink';
import Resources from "./Resources";
import SwitchRoute from "./SwitchRoute";

function App() {
  return (
    <div className="App">
      <Home />
      <BrowserRouter />
      <SwitchRoute />
      <LinkNavLink />
      <Resources />
    </div>
  );
}

export default App;
