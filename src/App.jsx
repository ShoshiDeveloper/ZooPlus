import './App.css'
import MainPage from './pages/MainPage'
import { Routes, Route } from 'react-router-dom';
import ChoiceAnimalPage from './pages/ChoiceAnimalPage';
import AboutAnimal from './pages/AboutAnimal';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/choice" element={<ChoiceAnimalPage />} />
        <Route path="/choice/:animalID" element={<AboutAnimal />} />
      </Routes>
    </div>
  )
}

export default App
