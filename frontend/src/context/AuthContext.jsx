import axios from "axios";
import { createContext, useState, useEffect } from "react";
import { USER_API_END_POINT } from "../utils/Constant";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false); // To track loading state
  const [token, setToken] = useState(localStorage.getItem("token") || null); // Get token from localStorage if available

  // Register function to handle the API call
  const register = async (userData) => {
    setLoading(true); // Start loading
    try {
      const response = await axios.post(
        `${USER_API_END_POINT}/signup`,
        userData
      );
      setUser(response.data); // Set the user on success
      setLoading(false); // End loading
      return response.data;
    } catch (error) {
      setLoading(false); // End loading
      console.error(error); // Log the error for debugging
      alert(
        error.response
          ? error.response.data.message
          : "Registration failed. Please try again."
      );
    }
  };

  // Login function to handle the API call
  const login = async (userData) => {
    setLoading(true); // Start loading
    try {
      const response = await axios.post(
        `${USER_API_END_POINT}/login`,
        userData
      );

      // Store token in localStorage
      localStorage.setItem("token", response.data.token);

      // Set the token and user data
      setToken(response.data.token);
      setUser(userData); // You can update the user state with more data if needed

      setLoading(false); // End loading
      return response.data; // Return the response data
    } catch (error) {
      setLoading(false); // End loading
      console.error(error); // Log the error for debugging
      alert(
        error.response
          ? error.response.data.error
          : "Login failed. Please try again."
      );
    }
  };

  // Check if the token exists on page load
  useEffect(() => {
    if (token) {
      console.log("User logged in with token:", token);
    }
  }, [token]);

  return (
    <AuthContext.Provider value={{ user, register, login, loading, token }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
