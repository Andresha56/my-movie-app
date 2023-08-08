import { createContext } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Header/Header";
import HomePage from "./Components/Home/HomePage";
import ShowMoviesList from "./Components/show_movie_list/ShowMoviesList";
import Movies from "./Components/Header/Movies/Movies";
import TVShows from "./Components/Header/TV_Shows/TVShows";
import { useEffect, useState } from "react";


export const MovieGenersContext = createContext();
export const TVGenersContext = createContext()

function App() {
  const [movieGeners, setMovieGenres] = useState()
  const [tvGeners, setTVGenres] = useState()
  useEffect(() => {
    Promise.all([
      fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=6b964db7c8189f36df08ad9d627c4eca'),
      fetch('https://api.themoviedb.org/3/genre/tv/list?api_key=YOUR_API_KEY=6b964db7c8189f36df08ad9d627c4eca')
    ])
      .then((responses) => Promise.all(responses.map((res) => res.json())))
      .then(([movieData, tvData]) => {
        setMovieGenres(movieData.genres);
        setTVGenres(tvData.genres);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [])



  return (
    <>
      <Navbar />
      <MovieGenersContext.Provider value={movieGeners}>
        <TVGenersContext.Provider value={tvGeners}>
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="/movies/:id" element={<>Movies type</>} />
            <Route path="/movie/:type" element={<ShowMoviesList />} />
            <Route path="/header/movies" element={<Movies />} />
            <Route path="/header/tv_Shows" element={<TVShows />} />
          </Routes>
        </TVGenersContext.Provider>
      </MovieGenersContext.Provider>
    </>
  );
}

export default App;
