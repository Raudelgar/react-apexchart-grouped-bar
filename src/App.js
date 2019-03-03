import React, { Component } from 'react';
import './App.css';
import GroupedBar from './component/groupedBar';

class App extends Component {
  render() {
    return (
      <div className="container">
        <GroupedBar/>
      </div>
    );
  }
}

export default App;
