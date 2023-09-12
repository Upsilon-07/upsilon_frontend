import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import Cookies from 'js-cookie';
import api from "../api/api";
const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  useEffect(() => {
    const token = Cookies.get("user_token");
    if (token) {
      let config = {
        headers: {
          Authorization: "Bearer " + token,
        },
      };

      api
        .get("/user", config)
        .then((response) => {
          if (response.status === 200) {
            setUser(response.data);
          }
        })
        .catch((error) => console.error(error));
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

UserContextProvider.propTypes = {
  children: PropTypes.node.isRequired, // Validate that children is a node (React element)
};

export default UserContext;

export { UserContextProvider };
