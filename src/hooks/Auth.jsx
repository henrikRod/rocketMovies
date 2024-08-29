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

  async function updateProfile({ user, avatarFile }) {
    try {
      if(avatarFile) {
        const fileUploadForm = new FormData();
        fileUploadForm.append("avatar", avatarFile);
        const response = await api.patch("/avatar", fileUploadForm);
        user.avatar = response.data.user.avatar;
      };

      await api.put("/users", user);
      localStorage.setItem("@rocketMovies:user", JSON.stringify(user));

      alert("Dados atualizados com sucesso");

      setData({ user, token: data.token });

    } catch (err) {
      if(err.response) {
        alert(err.response.data.message);
      }else {
        alert("Houve um erro ao atualizar os dados")
      };
    };
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
      updateProfile,
      user: data.user,
    }}>
      { children }
    </AuthContext.Provider>
  )
};

export function useAuth(){
  const useAuth = useContext(AuthContext);
  return useAuth;
};