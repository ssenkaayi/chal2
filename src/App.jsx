import { useState } from 'react'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import './App.css'
import './pages/Media_querries.css'
import Home from './pages/home/Home'
import Skill from './pages/skill/Skill'
import Expirence from './pages/experience/Experience'
import About from './pages/about/About'
import Nav from './components/Nav'
import Layout from './components/Layout'


function App() {
  

  return (
    <>

      <BrowserRouter basename="/chal2/">
        <Routes>
          <Route element={<Layout/>}>
            <Route path='/' index element={<Home />} />
            <Route path="/skill" element={<Skill />} />
            <Route path="/experience" element={<Expirence />} />
            <Route path="/about" element={<About />} />
          </Route>

        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
