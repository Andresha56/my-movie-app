import { useEffect, useState } from "react";
import axios from "axios";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import Chip from "@mui/material/Chip";
import "./carousel.css";
import GradeIcon from '@mui/icons-material/Grade';


function HomePage() {
  const API_URL =
    "https://api.themoviedb.org/3/movie/popular?api_key=6b964db7c8189f36df08ad9d627c4eca&append_to_response=videos,images";
  const [API_Response, SetAPIResponse] = useState([]);
  useEffect(() => {
    axios.get(API_URL).then((response) => {
      const filterMovies = response.data.results.filter(
        (movies) => movies.vote_average > 7.5
      );
      SetAPIResponse(filterMovies);
    });
  }, []);

  return (
    <>
      <Carousel autoplay autoPlay showThumbs={false} infiniteLoop={true} showArrows={false}>
        {API_Response.map((response) => {
          const { backdrop_path, id, title, vote_average, overview, adult,release_date} =
            response;

          return (
            <>
              <Link key={id}>
                <Box
                  sx={{
                    height: "100% ",
                  }}
                >
                  <img
                    style={{
                      objectFit: "cover",
                      width: "100%",
                    }}
                    src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
                    alt={""}
                  ></img>
                </Box>

                <Box
                  sx={{
                    height: "100%",
                    width: "100%",
                    position: "absolute",
                    top: 0,
                    background: "linear-gradient(to bottom left, rgba(0,0,0,0.2),rgba(0,0,0,0.89))",
                  }}
                >
                  {adult && (
                    <Chip
                      sx={{
                        position: "absolute",
                        top: "75px",
                        left: 0,
                        color: "#f3e5f5",
                      }}
                      label="Adult"
                    />
                  )}

                  <Box
                    sx={{
                      width: "block",
                      position: "absolute",
                      left:"30px",
                      bottom: "25%",
                    
                    }}
                  >
                    <h1 style={{color:"#ffffff",fontSize:"2rem",textAlign:"left"}}>{title}</h1>
                    <h2 style={{color:"#ffffff",textAlign:"left",margin:"1rem 0 2rem 0"}}>
                      {overview.length > 50
                        ? overview.slice(0, 50) + "..."
                        : overview}
                    </h2>
                  <Box sx={{
                    display:"flex",
                    gap:4,
                    alignItems:"center",
                  }}>
                  <p style={{color:"#ffffff",textAlign:"left",fontSize:"20px", display:"inline"}}>{`${release_date}`}</p>
                    <p style={{color:"#ffffff",textAlign:"left",fontSize:"20px",textAlignLast:"center",display: "flex", alignItems:"center"}}>{`${vote_average}`} <GradeIcon/></p>
                  </Box>
                  </Box>
                </Box>
              </Link>
            </>
          );
        })}
      </Carousel>
    </>
  );
}

export default HomePage;
