import { createContext, useContext, useEffect, useState } from "react";
import { loginRequest, registerRequest, verifyTokenRequest } from "../api/auth";
import Cookies from "js-cookie";

export const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be within an AuthProvider");
  }

  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticate, setIsAuthenticate] = useState(false);
  const [errors, setError] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    if (errors.length > 0) {
      const timer = setTimeout(() => {
        setError([]);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [errors]);

  useEffect(() => {
    async function checkLogin() {
      const cookies = Cookies.get();

      if (!cookies.token) {
        setIsAuthenticate(false);
        setLoading(false);
        setUser(null);
        return;
      }

      try {
        const res = await verifyTokenRequest(cookies.token);
        // console.log(res);

        if (!res.data) {
          setIsAuthenticate(false);
          setLoading(false);
          return;
        }

        setIsAuthenticate(true);
        setUser(res.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setIsAuthenticate(false);
        setUser(null);
        setLoading(false);
      }
    }

    checkLogin();
  }, []);


const logout =async ()=>{

Cookies.remove('token');
setIsAuthenticate(false)
setUser(null)

}


  const signup = async (user) => {
    try {
      const res = await registerRequest(user);
      console.log(res);
      setUser(res.data);
      setIsAuthenticate(true);
    } catch (error) {
      setError(error.response.data);

      console.log(error);
    }
  };

  const signin = async (user) => {
    try {
      const res = await loginRequest(user);
      setUser(res.data);
      setIsAuthenticate(true);
    } catch (error) {
      setError(error.response.data);
      console.log(error.response.data);
    }
  };
  return (
    <AuthContext.Provider
      value={{
        signup,
        user,
        isAuthenticate,
        errors,
        signin,
        loading,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
