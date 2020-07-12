import React from 'react'
import Navbar from './components/navbar'
import Header from './components/header'
import Skills from './components/skills'
import Projects from './components/projects'
import Footer from './components/footer'
import './static/css/app.css'

const App: React.FC = () => {
  return (
    <div className='wrapper'>
      <Navbar />
      <Header />
      <Skills />
      <Projects />
      <Footer />
    </div>
  )
}

export default App
