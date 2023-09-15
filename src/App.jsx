import "./App.css";
import CourseFavouritePage from "./pages/CourseFavouritePage/CourseFavouritePage";
import CourseLessonPage from "./pages/CourseLessonPage/CourseLessonPage";
import CoursePage from "./pages/CoursePage/CoursePage";
import { Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import StartJourney from "./pages/Start-Journey-Page/StartJourney";
import StartJourneyTwo from "./pages/Start-Journey-Page/StartJourneyTwo";
import StartJourneyThree from "./pages/Start-Journey-Page/StartJourneyThree";
import StartJourneyFour from "./pages/Start-Journey-Page/StartJourneyFour";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import ExercisePage from "./pages/ExercisePage/ExercisePage";
import AuthContext from "./contexts/AuthContext";
import UserContext from "./contexts/UserContext";
import ProtectedRoute from "./routes/ProtectedRoute";
import { useContext } from "react";
import ForgotPassword from "./pages/ForgotPasswordPage/ForgotPassword";
import ChangePassword from "./pages/ChangePasswordPage/ChangePassword";
import EditProfile from "./pages/EditProfilePage/EditProfilePage";
import MealsPage from "./pages/MealsPage/MealsPage";
import LessonDetailsPage from "./pages/LessonDetails/LessonDetailsPage";
import RecipePage from "./pages/RecipePage/RecipePage"
import ExerciseDetailPage from "./pages/ExerciseDetailPage/ExerciseDetailPage";
import NavbarDesktop from "./components/NavbarDesktop/NavbarDesktop";
import Navbar from "./components/navbar/Navbar";

function App() {
  const { user } = useContext(UserContext);
  const { isAuthenticated } = useContext(AuthContext);
  const location = useLocation()
  return (
    <>
    {location.pathname === "/forgot-password" || location.pathname === "/register" ||location.pathname === "/login" || location.pathname.includes("start-journey") ? null  :  <NavbarDesktop/>}
      <Routes>
        <Route path="/start-journey" element={<StartJourney />} />
        <Route path="/start-journey-1" element={<StartJourneyTwo />} />
        <Route path="/start-journey-2" element={<StartJourneyThree />} />
        <Route path="/start-journey-3" element={<StartJourneyFour />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
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
          <Route
            path="/user-profile/change-password"
            element={<ChangePassword />}
          />
          <Route path="/edit-profile" element={<EditProfile />} />
          <Route path="/courses" element={<CoursePage />} />
          <Route path="/favourites/courses" element={<CourseFavouritePage />} />
          <Route path="/courses/:id" element={<CourseLessonPage />} />
          <Route path="/lesson/:id" element={<LessonDetailsPage />} />
          <Route path="/exercise/:id" element={<ExercisePage />} />
          <Route
            path="/exercise/:id/details"
            element={<ExerciseDetailPage />}
          />
          <Route path="/meals" element={<MealsPage />} />
          <Route path="/recipes/:id" element={<RecipePage />} />
        </Route>
      </Routes>
    {location.pathname === "/forgot-password" || location.pathname === "/register" ||location.pathname === "/login" || location.pathname.includes("start-journey") ? null  :    <Navbar />}
    </>
  );
}

export default App;
