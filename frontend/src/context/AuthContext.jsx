import axios from "axios";
import { createContext, useState, useEffect } from "react";
import { USER_API_END_POINT } from "../utils/Constant";
import { useNavigate } from "react-router";

// Create AuthContext
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState(
    localStorage.getItem("vote_token") || null
  );
  const [userProfile, setUserProfile] = useState([]);
  const navigate = useNavigate();

  const register = async (userData) => {
    setLoading(true);
    try {
      const response = await axios.post(
        `${USER_API_END_POINT}/signup`,
        userData
      );
      setUser(response.data);
      setLoading(false);
      navigate("/login");
      return response.data;
    } catch (error) {
      setLoading(false);
      console.error(error);
      alert(
        error.response
          ? error.response.data.message
          : "Registration failed. Please try again."
      );
    }
  };

  const login = async (userData) => {
    setLoading(true);
    try {
      const response = await axios.post(
        `${USER_API_END_POINT}/login`,
        userData
      );
      localStorage.setItem("vote_token", response.data.token);
      setToken(response.data.token);
      setUser(userData);
      setLoading(false);
      alert("logged in successfully");
      navigate("/");
      return response.data;
    } catch (error) {
      setLoading(false);
      console.error(error);
      alert(
        error.response
          ? error.response.data.error
          : "Login failed. Please try again."
      );
    }
  };

  const profile = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${USER_API_END_POINT}/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUserProfile(response.data.data);
      console.log("User profile fetched:", response.data.data);
    } catch (error) {
      console.error("Failed to fetch profile:", error.response || error);
      alert(
        error.response?.data?.error ||
          "Failed to fetch user profile. Please try again."
      );
      setToken(null);
      localStorage.removeItem("vote_token");
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem("vote_token");
    setToken(null);
    setUser(null);
    setUserProfile([]);
    navigate("/");
    window.location.reload();
  };

  const changePassword = async (passwordData) => {
    setLoading(true);
    try {
      const response = await axios.put(
        `${USER_API_END_POINT}/profile/password`,
        passwordData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setLoading(false);
      alert("Password changed successfully!");
      return response.data;
    } catch (error) {
      setLoading(false);
      console.error("Failed to change password:", error.response || error);
      alert(
        error.response?.data?.error ||
          "Failed to change password. Please try again."
      );
    }
  };

  useEffect(() => {
    if (token) {
      profile();
      console.log("User logged in with token:", token);
    }
  }, [token]);

  return (
    <AuthContext.Provider
      value={{
        user,
        register,
        login,
        loading,
        token,
        userProfile,
        logout,
        changePassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
