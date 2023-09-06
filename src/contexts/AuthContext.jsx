import { createContext, useState } from 'react';
import PropTypes from "prop-types";

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
    const [isAuthenticated,setIsAuthenticated] = useState(false);
    
    return (
        <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
  
}

AuthContextProvider.propTypes = {
  children: PropTypes.node.isRequired, // Validate that children is a node (React element)
};

export default AuthContext;
