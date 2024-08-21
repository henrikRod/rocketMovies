import { createContext, useContext, useEffect, useState } from "react";

import { api } from "../services/api";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [ data, setData ] = useState({});

  async function signIn({ email, password }) {
    try {
      const response = await api.post("/sessions", { email, password })
      const { user, token } = response.data;
      
      localStorage.setItem("@rocketMovies:user", JSON.stringify(user));
      localStorage.setItem("@rocketMovies:token", token );
      
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      setData({ user, token });
    } catch (err) {
      if(err.response) {
        alert(err.response.data.message);
      } else {
        alert("Usuário não encontrado");
      };
    };
  }

  function singOut() {
    localStorage.removeItem("@rocketMovies:user");
    localStorage.removeItem("@rocketMovies:token");

    setData({});
  };

  return (
    <AuthContext.Provider value={{
      signIn,
      singOut,
      user: data.user
    }}>
      { children }
    </AuthContext.Provider>
  )
};

export function useAuth(){
  const useAuth = useContext(AuthContext);
  return useAuth;
};