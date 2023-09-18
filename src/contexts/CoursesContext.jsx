/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import Cookies from 'js-cookie';
import api from "../api/api";

const CoursesContext = createContext();

const CoursesContextProvider = ({ children }) => {
  const [courses, setCourses] = useState([]);
  const [numberLessons, setNumberLessons] = useState([]);

  useEffect(() => {
    const token = Cookies.get("user_token");
    if (token) {
      let config = {
        headers: {
          Authorization: "Bearer " + token,
        },
      };
      api
      .get("/courses",config)
      .then((response) => {
        if (response.status === 200) {
          setCourses(response.data.courses);
          setNumberLessons(response.data.numberLessons);
        } else {
          console.error("Error getting courses suggestions");
        }
      })
      .catch((error) => console.error(error));
    }
  }, []);

  return (
    <CoursesContext.Provider value={{ courses, numberLessons }}>
      {children}
    </CoursesContext.Provider>
  );
};

CoursesContextProvider.propTypes = {
  children: PropTypes.node.isRequired, // Validate that children is a node (React element)
};

export default CoursesContext;

export { CoursesContextProvider };
