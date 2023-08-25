
import ProfilePicture from '../../components/ProfilePicture/ProfilePicture'
import CoursesCard from '../../components/CoursesCard/CoursesCard'
import "./CoursePage.css"
import StarButton from '../../components/StarButton/StarButton'
import { Link } from "react-router-dom"


const CoursePage = () => {
  return (
    <div className='course-page'>
        <div className='top'>
        <ProfilePicture/>
        <Link to="/courses/favourite"><StarButton/></Link>
        </div>
        <h1 className='title-courses'>Courses</h1>
        <CoursesCard/>
    </div>
  )
}

export default CoursePage