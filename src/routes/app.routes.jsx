import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import NewMovie from "../pages/NewMovie";
import MoviePreview from "../pages/MoviePreview";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/newMovie" element={<NewMovie />} />
      <Route path="/moviePreview/:id" element={<MoviePreview />} />
    </Routes>
  )
}