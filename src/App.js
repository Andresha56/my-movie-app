import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Header/Header";
import HomePage from "./Components/Home/HomePage";
import ShowMoviesList from "./Components/show_movie_list/ShowMoviesList";
import Movies from "./Components/Header/Movies/Movies";
import TVShows from "./Components/Header/TV_Shows/TVShows";



function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/movies/:id" element={<>Movies type</>} />
        <Route path="/movie/:type" element={<ShowMoviesList/>}/>
        <Route path="/header/movies" element={<Movies/>}/>
        <Route path="/header/tv_Shows" element={<TVShows/>}/>
      </Routes>


    </>
  );
}

export default App;
