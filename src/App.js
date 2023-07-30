import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Header/Header";
import HomePage from "./Components/Home/HomePage";
import RecentlyUpdated from "./Components/Recently-Updated/RecentlyUpdated";
import TopRatedMoviesPage from "./Components/TopRatedMoviesPage/TopRatedMoviesPage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recenetly-release" element={<RecentlyUpdated />} />
        <Route path="/top-rated" element={<TopRatedMoviesPage />} />
      </Routes>
    </>
  );
}

export default App;
