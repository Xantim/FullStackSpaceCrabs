import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Router, Link} from "@reach/router";
import Main from './views/Main';
import New from './views/New';
import Show from './views/Show';
import Edit from './views/Edit'

function App() {
  return (
    <div className="App">
      <div className="bg-dark text-warning rounded col-12 mx-auto">
        <h1>Space Crabs</h1>
        <div className="d-flex justify-content-center bg-dark col-6 mx-auto p-2 rounded">
          <Link to="/new" className="btn btn-primary mr-2">Create a Crab</Link>
          <Link to="/" className="btn btn-primary">Home</Link>
        </div>
        <Router>
          <Main path="/" />
          <New path="/new" />
          <Show path="/crab/:id" />
          <Edit path="/edit/:id" />
        </Router>
      </div>
    </div>
  );
}

export default App;
