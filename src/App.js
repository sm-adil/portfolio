import React, { Component } from 'react';
import Header from './components/Header'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Footer from './components/Footer'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
        <Skills />
        <Projects />
        <Footer />
      </div>
    );
  }
}

export default App;
