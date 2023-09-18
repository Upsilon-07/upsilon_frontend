/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Card.css";
import clock from "../../assets/images/time.svg";

import PropTypes from "prop-types";

const Card = ({ data, numberLessons, linkTo }) => {
  const [lessonCount, setLessonCount] = useState();

  useEffect(() => {
    if (numberLessons !== null && numberLessons?.length > 0) {
      numberLessons
        .filter((lessons) => lessons.courseName === data.courseName)
        .map((lessons) => setLessonCount(lessons.lessonCount));
    }
  }, []);

  return (
    <div className="course-container">
      <Link to={`/${linkTo}/${data.id}`}>
        <div className="left-and-right-container">
          {data.image ? (
            <div className="left-container">
              <img className="yoga-pose" src={data.image} alt="" />
            </div>
          ) : null}
          <div className="right-container">
            <div className="title">
              {data.courseName ? (
                <h2 className="course-name">{data.courseName}</h2>
              ) : data.lesson_name ? (
                <h2 className="course-name">{data.lesson_name}</h2>
              ) : data.meal_name ? (
                <h2 className="course-name">{data.meal_name}</h2>
              ) : null}
              {data.exercise_name ? (
                <h2 className="course-name">{data.exercise_name}</h2>
              ) : null}
              {numberLessons && lessonCount ? (
                <h4 className="number-of-lessons">{lessonCount} Lessons</h4>
              ) : null}
              {data.duration && data.lesson_name ? (
                <div className="clock-and-time">
                  <img src={clock} alt="clock of duration" />{" "}
                  <h4>{data.duration} mins</h4>
                </div>
              ) : null}
              {data.duration && data.meal_name ? (
                <div className="clock-and-time">
                  <img src={clock} alt="clock of duration" />{" "}
                  <h4>{data.duration} mins</h4>
                </div>
              ) : null}
            </div>
            <div className="bottom-container">
              {data.trainer ? (
                <>
                  <p>{data.trainer}</p>{" "}
                </>
              ) : null}
              {data.difficulty ? (
                <>
                  <img
                    className="dot-image"
                    src="/src/assets/images/dot-image.svg"
                    alt="dot"
                  />
                  {data.courseName ? (
                    <>
                      <p>{data.difficulty == 1 ? "Beginner" : null}</p>
                      <p>{data.difficulty == 2 ? "Intermediate" : null}</p>
                      <p>{data.difficulty == 3 ? "Advanced" : null}</p>
                    </>
                  ) : data.lesson_name || data.exercise_name ? (
                    <p>{data.difficulty}</p>
                  ) : null}
                </>
              ) : null}
              {data.rating ? (
                <>
                  <img
                    className="dot-image"
                    src="/src/assets/images/dot-image.svg"
                    alt="dot"
                  />
                  <img src="/src/assets/images/small-star.svg" alt="" />
                  <p className="paragraph-bottom">{data.rating}</p>
                </>
              ) : null}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

Card.propTypes = {
  data: PropTypes.shape({
    courseName: PropTypes.string,
    lesson_name: PropTypes.string,
    meal_name: PropTypes.string,
    image: PropTypes.string,
    lessons: PropTypes.number,
    duration: PropTypes.number,
    rating: PropTypes.number,
    trainer: PropTypes.string,
    // difficulty: PropTypes.number || PropTypes.string,
  }),
  numberLessons: PropTypes.arrayOf(
    PropTypes.shape({
      courseName: PropTypes.string,
      lessonCount: PropTypes.number,
    })
  ),
};

export default Card;
