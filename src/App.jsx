import { useState } from 'react'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Skill from './pages/skill/Skill'
import Expirence from './pages/experience/Experience'
import About from './pages/about/About'
import Nav from './components/Nav'
import Layout from './components/Layout'


function App() {
  

  return (
    <>
      {/* <Nav/>
      <p>Hello world</p>
      <Home/>
      <Skill/>
      <Expirence/>
      <About/> */}

      <BrowserRouter>
        <Routes>
          <Route element={<Layout/>}>
            <Route index element={<Home />} />
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
