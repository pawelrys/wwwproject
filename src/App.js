import React, { Component } from 'react';
import './App.css';
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import Home from "./Home";
import Stuff from "./Stuff";
import Cantor from "./Cantor";
class App extends Component {
  render() {
    return (
        <HashRouter>
            <div>
                <h1>Simple SPA</h1>
                <ul className="header">
                    <li><NavLink exact to="/home">Home</NavLink></li>
                    <li><NavLink to="/stuff">Stuff</NavLink></li>
                    <li><NavLink to="/cantor">Cantor</NavLink></li>
                </ul>
                <div className="content">
                    <Route exact path="/" component={Home}/>
                    <Route path="/home" component={Home}/>
                    <Route path="/stuff" component={Stuff}/>
                    <Route path="/cantor" component={Cantor}/>
                </div>

            </div>
        </HashRouter>
    );
  }
}
export default App;
