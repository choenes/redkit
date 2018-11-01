import React, { Component } from 'react';
import './App.css';
import Editor from './Editor' ;
import Connection from './Connection';
import { Route, Link } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className="nav">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/editor">Editor</Link></li>
          <li><Link to="/connection">Connection</Link></li>
        </ul>

        <div className="mainContainer">
          <Route path="/editor" component={Editor}/>
          <Route path="/connection" component={Connection}/>
        </div>

      </div>
    );
  }
}

export default App;
