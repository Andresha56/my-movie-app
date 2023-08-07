

import { useParams } from "react-router-dom"
import MoviesList from "../MoviesList/MoviesList"
function ShowMoviesList() {
  const { type } = useParams();
  return (
    <>
     <MoviesList  
        heading={"Movies in "}       
        types={type}
      />
    </>
  )
}

export default ShowMoviesList
