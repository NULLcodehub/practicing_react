import { useState } from 'react'
import {BrowserRouter as Router,Route,Routes, Form} from "react-router-dom"
import Users from './users/pages/Users'
import NewPlaces from './places/pages/NewPlaces'
import MainNavigation from './shared/components/Navigation/MainNavigation'
import './App.css'



function App() {

  return (
  
      <Router>
        <MainNavigation/>
        <Routes>
          <Route path="/" element={<Users/>} exact />
          <Route path='/places/new' element={<NewPlaces/>} exact/>
        </Routes>
        
      </Router>
      
  )
}

export default App
