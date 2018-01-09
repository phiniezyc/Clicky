import React, { Component } from 'react';
import './App.css';

import Navbar from './components/Navbar/Navbar';
// import JumbotronMaterialize from './components/JumbotronMaterialize/JumbotronMaterialize';
import PicturesBox from './components/PicturesBox/PicturesBox';
import ScoreBoard from './components/ScoreBoard/ScoreBoard';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        {/* <JumbotronMaterialize /> */}
        <ScoreBoard />
        <PicturesBox />

      </div>
    );
  }
}

export default App;
