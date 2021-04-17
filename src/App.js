import React from "react";
import { BrowserRouter } from "react-router-dom";
import Main from "./views/main";

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
