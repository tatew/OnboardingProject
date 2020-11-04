import React from 'react';
import './App.css';
import StateCountry from './stateCountry';
import { Route, Switch, Link } from 'react-router-dom';
import AddStates from './addStates';
import UpdateServer from './updateServer'

function App() {
  return (
    <div className="App">
      <div className="content">
        <header>
          <h1>States & Countries</h1>
        </header>
        <nav>
          <Link to="./">Home</Link>
          <Link to="./AddCountries">Add Countries</Link>
          <Link to="./AddStates">Add States</Link>
        </nav>
        <Switch>
          <Route path="/old/" component={StateCountry} exact></Route>
          <Route path="/old/AddStates" component={AddStates}></Route>
          <Route path="/old/AddCountries" render={() => <UpdateServer name="Country"/>}></Route>
        </Switch>
      </div>
      <div className="image">
        <img src="../Globe.png" alt="Polygon globe" width="250" height="250"/>
      </div>
    </div>
  );
}


export default App;
