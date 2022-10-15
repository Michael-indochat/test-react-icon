import React from "react";
import ReactDOM from "react-dom/client";
import { IconContext } from "react-icons";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <IconContext.Provider value={{className:'text-slate-500', size:'1.25rem'}}>
      <Router>
        <App />
      </Router>
    </IconContext.Provider>
  </React.StrictMode>
);
