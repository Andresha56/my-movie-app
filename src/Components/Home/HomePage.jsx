import CarouselSlide from "./CarouselSlide/CarouselSlide";
import MoviesList from "../MoviesList/MoviesList";
import { Outlet } from "react-router-dom";

function HomePage() {
  return (
    <>
      <CarouselSlide />
      <MoviesList heading={"Movies in Tranding"} types="trending"/>

      <MoviesList heading={"Movies in Top Rating"} types="top_rated" />

      <MoviesList heading={"Most Populars for you"} types="popular" />

      <MoviesList heading={"Upcoming"} types="upcoming" />

      <Outlet />
    </>
  );
}

export default HomePage;
