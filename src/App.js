import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Header/Header";
import HomePage from "./Components/Home/HomePage";
import RecentlyUpdated from "./Components/Recently-Updated/RecentlyUpdated";
import TopRatedMoviesPage from "./Components/TopRatedMoviesPage/TopRatedMoviesPage";
import Cards from "./Components/Cards/Cards";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recenetly-release" element={<RecentlyUpdated />} />
        <Route path="/top-rated/:id" element={<TopRatedMoviesPage />} />
      </Routes>
      <Cards/>
    </>
  );
}

export default App;
