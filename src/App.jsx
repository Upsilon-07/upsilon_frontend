import './App.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/homePage'
import Navbar from './components/navbar/Navbar'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage/>} />
      </Routes>
      <Navbar/>
    </>
  )
}

export default App
