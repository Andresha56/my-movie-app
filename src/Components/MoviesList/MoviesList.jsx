import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Container, Grid } from "@mui/material";
import Cards from "../Cards/Cards";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { MovieGenersContext } from "../../App";

function MoviesList({ heading, types }) {
  const [API_Response, setApiResponse] = useState([]);
  const [BaseUrl, setBaseUrl] = useState(null);
  const [handelParam,setHandelParams]=useState("")
  const {type} = useParams();
  useEffect(() => {
    if (types === "trending") {
      setBaseUrl(
        `https://api.themoviedb.org/3/${types}/movie/day?api_key=6b964db7c8189f36df08ad9d627c4eca&append_to_response=videos,images`
      );
    } else {
      setBaseUrl(
        `https://api.themoviedb.org/3/movie/${types}?api_key=6b964db7c8189f36df08ad9d627c4eca&append_to_response=videos,images`
      );
    }
  }, [types]);

  useEffect(() => {
    if (BaseUrl) {
      axios
        .get(BaseUrl)
        .then((response) => {
          setApiResponse(response.data.results);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
    if (type) {
      const str = type.replaceAll("_", " ");
      const capitalizedStr = str.charAt(0).toUpperCase() + str.slice(1);
      setHandelParams(capitalizedStr);
    }

  }, [BaseUrl,type]);
  const geners=useContext(MovieGenersContext)
  console.log(geners)

  return (
    <Container>
      <h1 style={{ display: "inline", marginRight: "20px" }}>
        {heading} {handelParam}
        {}
      </h1>
      {type ? "" : <Link to={`/movie/${types}`}>View all</Link>}
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        rowSpacing={0.5}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        {type
          ? API_Response.map((response, index) => (
              <Grid item xs={12} sm={4} md={3} lg={3} key={index}>
                <Cards data={response} />
              </Grid>
            ))
          : API_Response.slice(0, 12).map((response, index) => (
              <Grid item xs={6} sm={3} md={2} lg={2} key={index}>
                <Cards data={response} />
              </Grid>
            ))}
      </Grid>
    </Container>
  );
}

export default MoviesList;
