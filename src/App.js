
import React, { Component } from 'react'
import Intro from './components/Intro'
import NavBar from './components/NavBar'
import Skills from './components/Skills'
import './styles/App.scss';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Intro />
        <Skills />
      </React.Fragment>
    )
  }
}

export default App;


