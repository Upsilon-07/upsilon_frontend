import './App.css';
import CourseFavouritePage from './pages/CourseFavouritePage/CourseFavouritePage';
import CoursePage from './pages/CoursePage/CoursePage';
import { Routes, Route } from 'react-router-dom';




function App() {

  return (
    <>
     
      <Routes>
        <Route path="/courses" element={<CoursePage/>} />
        <Route path="/courses/favourite" element={<CourseFavouritePage/>} />
      </Routes>
     
    </>
  )
}


export default App
