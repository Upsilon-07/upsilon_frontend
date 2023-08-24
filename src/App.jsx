import { Routes, Route } from 'react-router-dom';
import './App.css'
import StartJourney from './pages/StartJourney'
import StartJourneyTwo from './pages/StartJourneyTwo';
import StartJourneyThree from './pages/StartJourneyThree';
import StartJourneyFour from './pages/StartJourneyFour';

function App() {

  return (
    <>
     <Routes> 
      <Route path='/' element={<StartJourney/>}/>
      <Route path='/1' element={<StartJourneyTwo/>}/>
      <Route path='/2' element={<StartJourneyThree/>}/>
      <Route path='/3' element={<StartJourneyFour/>}/>
     </Routes>
    </>
  )
}

export default App
