import React from "react";
import { Header } from "./components";
import { MoviesDisplay, SearchAndSort } from "./containers";

import "./App.css";

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <SearchAndSort />
      <MoviesDisplay />
    </div>
  );
}

export default App;
