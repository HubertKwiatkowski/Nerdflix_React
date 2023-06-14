import React from "react";
import { Header } from "./components";
import { Movies } from "./containers";

import "./App.css";

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <Movies />
    </div>
  );
}

export default App;
