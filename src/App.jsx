import { useState } from 'react'
import './App.css'
import MainPage from './pages/MainPage'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ChoiceAnimalPage from './pages/ChoiceAnimalPage';
import AboutAnimal from './pages/AboutAnimal';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route exact path="/" Component={MainPage} />
        <Route exact path="/choice" Component={ChoiceAnimalPage} />
        <Route exact path="/choice/:animalID" Component={AboutAnimal} />
      </Routes>
    </div>
    )
}

export default App
