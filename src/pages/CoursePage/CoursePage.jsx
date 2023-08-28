
import ProfilePicture from '../../components/ProfilePicture/ProfilePicture'
import CoursesCard from '../../components/CoursesCard/CoursesCard'
import "./CoursePage.css"
import StarButton from '../../components/StarButton/StarButton'
import { Link } from "react-router-dom"
import Navbar from "../../components/navbar/Navbar"


const CoursePage = () => {
  return (
    <div className='course-page'>
        <div className='top'>
        <ProfilePicture/>
        <Link to="/courses/favourite"><StarButton/></Link>
        </div>
        <h1 className='title-courses'>Courses</h1>
        <Link className="card-link" to="/courses/lessons"><CoursesCard/></Link>
        <Navbar/>
    </div>
  )
}

export default CoursePage