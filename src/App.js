import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import { useEffect } from "react";
import axios from "axios";

function App() {

  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
