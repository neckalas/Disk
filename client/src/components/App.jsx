import React from 'react';
import Navbar from './navbar/Navbar';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import Registration from './registration/Registration';
import Login from './registration/Login';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar/>
        <div className="wrap">
          <Switch>
            <Route path="/registration" component={Registration}/>
            <Route path="/login" component={Login}/>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
