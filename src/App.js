import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";

import Create from "./components/Create";
import Read from "./components/Read";
import Update from "./components/Update";

function App() {
  return (
    <BrowserRouter>
      <div className="main">
        <h2 className="main-header">React Crud Operations</h2>
        <div>
          <Route exact path="/create" component={Create} />
          <Route exact path="/read" component={Read} />
          <Route exact path="/update" component={Update} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
