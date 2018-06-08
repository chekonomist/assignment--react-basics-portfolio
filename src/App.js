import React, { Component } from 'react';
import PortfolioFixed from './components/PortfolioFixed.js'
import PortfolioContent from './components/PortfolioContent.js'

class App extends Component {
  render() {
    return (
      <div id="#app-container">
        <PortfolioFixed />
        <PortfolioContent />
      </div>
    );
  }
}

export default App;
