import { useState } from 'react'
import './App.scss'
import {Routes,Route,useLocation} from 'react-router-dom'
import Navbar from './components/NavBar/Index'
import Home from './containers/home/Index'
import About from './containers/about/Index'
import Resume from './containers/resume/Index'
import Skills from './containers/skills/Index'
import Portfolio from './containers/portfolio/Index'
import Contact from './containers/contact/Index'

import ParticlesComponent from './components/particle'
import {loadFull} from 'tsparticles'
import {Particles} from 'react-tsparticles'

const App=()=>{
  const location = useLocation();

  const renderparticlejsinHomePage = location.pathname==='/';
  return (
     <>
     <div className='App'>
     

      {/* particle js */}
      {
       renderparticlejsinHomePage && <ParticlesComponent/>
      }
      
   
     
      {/* navbar */}
      {/* main page */}
       
    
           <div className='main-page-content'>
             
           <Routes>
                <Route index path='/' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/skills' element={<Skills/>}/>
                <Route path='/resume' element={<Resume/>}/>
                <Route path='/portfolio' element={<Portfolio/>}/>
                <Route path='/contact' element={<Contact/>}/>
              </Routes>
           </div>
           <div>
         <Navbar/>
         </div>
              </div>
         </>
     )
   }

export default App
