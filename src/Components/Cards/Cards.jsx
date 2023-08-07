import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";


function Cards({data}) {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  const  {original_language, overview, poster_path, title, vote_average,release_date
  }=data;

  return (
    <>
      {isLoading ? (
        <Box
          sx={{
            bgcolor: "#121212",
            p:2,
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Skeleton
            sx={{ bgcolor: "grey.900" }}
            variant="rectangular"
            width="100%"
            height={280}
          />
        </Box>
      ) : (

          <Card
            sx={{
              width:"100%",
              height: 280,
              marginTop: 1,
              position: "relative",
              marginBottom: "20px",
            }}
          >
            <CardMedia
              component="img"
              height="100%"
              image={`https://image.tmdb.org/t/p/original/${poster_path}`}
              alt="green iguana"
              
            />
            <CardContent
              sx={{
                position: "absolute",
                top: "40px",
                left: 0,
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                color: "#ffffff",
                transition: "all 0.6s ease",
                opacity: 0,
                boxSizing:"border-box",
                backgroundColor: "rgba(0, 0, 0, 0.8) !important",
                "&:hover": {
                  top: 0,
                  opacity: 1,
                },
              }}
            >
              <Box sx={{ position: "absolute", top: "20px" }}>
                <Box sx={{ width: "75%", marginLeft: "12px" }}>
                  <Typography gutterBottom variant="h5" component="div">
                    {title}
                  </Typography>
                  <Typography variant="body2" color="ffffff">
                    {overview ? overview.slice(0, 50) + "..." : ""}
                  </Typography>

                  {vote_average.toFixed(1)} <span>| </span>
                  {original_language} <span>|</span> {release_date}
                  <CardActions >
                    <Button size="small" variant="outlined" sx={{color:"#ffffff"}} >PlayNow</Button>
                  </CardActions>
                </Box>
              </Box>
            </CardContent>
          </Card>

      )}
    </>
  );
}

export default Cards;
