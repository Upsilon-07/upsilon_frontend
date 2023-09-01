import { useState, useEffect } from "react";
import "./Card.css";

import PropTypes from "prop-types";

const Card = ({ data, numberLessons }) => {
  const [lessonCount, setLessonCount] = useState();

  useEffect(() => {
    if (numberLessons !== null && numberLessons?.length > 0) {
      numberLessons
        .filter((lessons) => lessons.courseName === data.courseName)
        .map((lessons) => setLessonCount(lessons.lessonCount));
    }
  }, []);

  return (
    <div>
      <div className="course-container">
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
              ) : null}
              {numberLessons && lessonCount ? (
                <h3 className="number-of-lessons">{lessonCount} Lessons</h3>
              ) : null}
              {data.duration ? (
                <>
                  <img /> <h3>{data.duration}</h3>
                </>
              ) : null}
            </div>
            <div className="bottom-container">
              {data.trainer ? (
                <>
                  <p>{data.trainer}</p>{" "}
                  <img
                    className="dot-image"
                    src="/src/assets/images/dot-image.svg"
                    alt="dot"
                  />
                </>
              ) : null}
              {data.difficulty ? (
                <>
                  <p>{data.difficulty}</p>
                  <img
                    className="dot-image"
                    src="/src/assets/images/dot-image.svg"
                    alt="dot"
                  />
                </>
              ) : null}
              {data.rating ? (
                <>
                  <img src="/src/assets/images/small-star.svg" alt="" />
                  <p>{data.rating}</p>
                </>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  data: PropTypes.shape({
    courseName: PropTypes.string,
    image: PropTypes.string,
    lessons: PropTypes.number,
    duration: PropTypes.string,
    rating: PropTypes.string,
    trainer: PropTypes.string,
    difficulty: PropTypes.string,
  }).isRequired,
};

export default Card;
