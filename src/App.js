import React, { Component } from 'react';
import {Link,Route} from 'react-router-dom';
import logo from './logo.svg';
import login from './components/login/login';
import Home from './components/Home/Home';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <header className="App-header">
          <nav>
            <Link to="/Login">Login</Link>
            <br/>
            <Link to="/">Home</Link>
          </nav>
        </header>
        
        
         
          <Route path="/Login" component={login}/>
          <Route exact path="/" component={Home}/>
      </div>
    );
  }
}

export default App;
