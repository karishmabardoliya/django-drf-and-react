import React, { Component } from 'react';
import './App.css';
import TutorialList from './components/TutorialList';
import Tutorial from './components/Tutorial';
import AddTutorial from './components/AddTutorial';
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
class App extends Component {
    render() {
        return (
            <div>
                <nav className="navbar">
                    <div className='logo'>
                        <a href="/tutorials" className="togglebtn">Django React CRUD</a>
                    </div>
                    <div className="navbar-links">
                        <ul>
                            <li className="nav-item">
                                <Link to={"/tutorials"} className="nav-link">Tutorials</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/add"} className="nav-link">Add</Link>
                            </li> 
                        </ul>
                    </div>
                </nav>
                <div className="container mt-3">
                    <Switch>
                        <Route exact path={["/", "/tutorials"]} component={TutorialList} />
                        <Route exact path="/add" component={AddTutorial} />
                        <Route path="/tutorials/:id" component={Tutorial} />
                    </Switch>
                </div>
            </div>
        );
    }
}

export default App;
