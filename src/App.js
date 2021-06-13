import React, { Component } from 'react';
import { Parallax } from 'react-parallax';
import './App.css';
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import AboutMe from "./AboutMe";
import Hobby from "./Hobby";
import Contact from "./Contact";
import FavouriteGame from "./FavouriteGame";
import Experience from "./Experience";
import Projects from "./Projects";
import image1 from './photos/back1.jpg'
import image2 from './photos/back2.jpg'
import image3 from './photos/back3.jpg'
import image4 from './photos/back4.jpg'
class App extends Component {
  render() {
    return (
        <div>
            <Parallax bgImage={ image3 } strength={500}>
            <HashRouter>
                <div>
                    <div className="menu">
                        <h1>Paweł Ryś</h1>
                        <ul className="header">
                            <li><NavLink exact to="/aboutMe">Kilka Słów</NavLink></li>
                            <li><NavLink exact to="/experience">Doświadczenie</NavLink></li>
                            <li><NavLink exact to="/projects">Projekty</NavLink></li>
                            <li><NavLink to="/hobby">Hobby</NavLink></li>
                            <li><NavLink to="/favouriteGame">Ulubiona Gra</NavLink></li>
                            <li><NavLink to="/contact">Kontakt</NavLink></li>
                        </ul>
                        <div className="content">
                            <Route exact path="/" component={AboutMe}/>
                            <Route path="/aboutMe" component={AboutMe}/>
                            <Route path="/experience" component={Experience}/>
                            <Route path="/projects" component={Projects}/>
                            <Route path="/hobby" component={Hobby}/>
                            <Route path="/favouriteGame" component={FavouriteGame}/>
                            <Route path="/contact" component={Contact}/>
                        </div>
                    </div>
                </div>
            </HashRouter>
            </Parallax>
            <Parallax className="images" bgImage={ image2 } strength={500}>
            </Parallax>
            <Parallax className="images" bgImage={ image1 } strength={500}>
            </Parallax>
            <Parallax className="images" bgImage={ image4 } strength={500}>
            </Parallax>
        </div>
    );
  }
}
export default App;
