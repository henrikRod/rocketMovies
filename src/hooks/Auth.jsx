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

  function signOut() {
    localStorage.removeItem("@rocketMovies:user");
    localStorage.removeItem("@rocketMovies:token");

    setData({});
  };

  useEffect(() => {
    const user = localStorage.getItem("@rocketMovies:user");
    const token = localStorage.getItem("@rocketMovies:token");

    if( user && token ) {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      
      setData({
        user: JSON.parse(user),
        token
      })
    }
  }, []);

  return (
    <AuthContext.Provider value={{
      signIn,
      signOut,
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