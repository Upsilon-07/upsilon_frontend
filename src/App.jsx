import "./App.css";
import CourseFavouritePage from "./pages/CourseFavouritePage/CourseFavouritePage";
import CourseLessonPage from "./pages/CourseLessonPage/CourseLessonPage";
import CoursePage from "./pages/CoursePage/CoursePage";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import StartJourney from "./pages/Start-Journey-Page/StartJourney";
import StartJourneyTwo from "./pages/Start-Journey-Page/StartJourneyTwo";
import StartJourneyThree from "./pages/Start-Journey-Page/StartJourneyThree";
import StartJourneyFour from "./pages/Start-Journey-Page/StartJourneyFour";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import ExercisesPage from "./pages/ExercisesPage/ExercisesPage";
import AuthContext from "./contexts/AuthContext";
import UserContext from "./contexts/UserContext";
import ProtectedRoute from "./routes/ProtectedRoute";
import { useContext } from "react";
import EditProfile from "./pages/EditProfilePage/EditProfilePage"

function App() {
  const { user } = useContext(UserContext);
  const { isAuthenticated } = useContext(AuthContext);
  return (
    <>
      <Routes>
        <Route path="/start-journey" element={<StartJourney />} />
        <Route path="/start-journey-1" element={<StartJourneyTwo />} />
        <Route path="/start-journey-2" element={<StartJourneyThree />} />
        <Route path="/start-journey-3" element={<StartJourneyFour />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />

        <Route
          element={
            <ProtectedRoute
              redirectPath="/start-journey"
              isAllowed={isAuthenticated && user}
            />
          }
        >
          <Route index element={<HomePage />} />
          <Route path="/user-profile" element={<ProfilePage />} />
          <Route path="/edit-profile" element={<EditProfile />} />
          <Route path="/courses" element={<CoursePage />} />
          <Route path="/courses/favourite" element={<CourseFavouritePage />} />
          <Route path="/courses/:id" element={<CourseLessonPage />} />
          <Route path="/exercises/:id" element={<ExercisesPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
