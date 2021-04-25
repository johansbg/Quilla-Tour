import React from "react";
import { BrowserRouter } from "react-router-dom";
import Main from "./views/Main";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Main />
      </div>
    </BrowserRouter>
  );
}

export default App;
