import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from "./components/SearchBar";



class App extends Component {
  render() {
    return (
      <div className="ui container">
        <div>
            Videos app
        </div>
          <div>
              <SearchBar />
          </div>
      </div>
    );
  }
}

export default App;
