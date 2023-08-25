import './App.css';
import CourseFavouritePage from './pages/CourseFavouritePage/CourseFavouritePage';
import CourseLessonPage from './pages/CourseLessonPage/CourseLessonPage';
import CoursePage from './pages/CoursePage/CoursePage';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/homePage'




function App() {

  return (
    <>
     
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path="/courses" element={<CoursePage/>} />
        <Route path="/courses/favourite" element={<CourseFavouritePage/>} />
        <Route path="/courses/lessons" element={<CourseLessonPage/>} />

      </Routes>
     
    </>
  )
}


export default App
