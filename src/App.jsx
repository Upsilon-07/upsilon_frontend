import { Routes, Route } from 'react-router-dom';
import './App.css'
import StartJourney from './pages/Start-Journey-Page/StartJourney'
import StartJourneyTwo from './pages/Start-Journey-Page/StartJourneyTwo';
import StartJourneyThree from './pages/Start-Journey-Page/StartJourneyThree';
import StartJourneyFour from './pages/Start-Journey-Page/StartJourneyFour';

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
