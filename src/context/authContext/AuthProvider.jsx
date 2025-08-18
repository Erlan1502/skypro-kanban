import { useState } from "react";
import { AuthContext } from "./AuthContext";
import { signIn, signUp } from "../../services/auth";

const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(() => {
    return Boolean(localStorage.getItem("userInfo"));
  });

  const [user, setUser] = useState(() => {
    const userInfo = localStorage.getItem("userInfo");
    return userInfo ? JSON.parse(userInfo) : null;
  });

  const login = async (loginData) => {
    try {
      const userData = await signIn(loginData);
      setIsAuth(true);
      setUser(userData);
      localStorage.setItem("userInfo", JSON.stringify(userData));
      return true;
    } catch (error) {
      setIsAuth(false);
      setUser(null);
      throw error;
    }
  };

  const register = async (registerData) => {
    try {
      const userData = await signUp(registerData);
      setIsAuth(true);
      setUser(userData);
      localStorage.setItem("userInfo", JSON.stringify(userData));
      return true;
    } catch (error) {
      setIsAuth(false);
      setUser(null);
      throw error;
    }
  };

  const logout = () => {
    setIsAuth(false);
    setUser(null);
    localStorage.removeItem("userInfo");
  };

  return (
    <AuthContext.Provider value={{ isAuth, user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
