
import React, { Component } from 'react'
import Intro from './components/Intro'
import NavBar from './components/NavBar'
import Skills from './components/Skills'
import Experience from './components/Experience'
import "./App.scss";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main>
        <Intro />
        <Skills />
        <Experience />
        </main>
      </React.Fragment>
    )
  }
}

export default App;


