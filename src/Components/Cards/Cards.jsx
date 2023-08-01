import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Container,Button } from "@mui/material";

function Cards() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <Container>
      {isLoading ? (
        <Box
          sx={{
            bgcolor: "#121212",
            p: 8,
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Skeleton
            sx={{ bgcolor: "grey.900" }}
            variant="rectangular"
            width={200}
            height={118}
          />
        </Box>
      ) : (
        <Card
          sx={{
            maxWidth: 345,
            minWidth: 240,
            width: 200,
            height: 280,
            marginTop: 1,
            position: "relative",
            marginBottom: "20px",
          }}
        >
          <CardActionArea
            sx={{
              height: "100%",
              transition: "all 0.6s ease",
              "&:hover": {
                transform: "scale(1.2)",
                background: "rgba(0, 0, 0, 0.5)",
              },
            }}
          >
            <CardMedia
              component="img"
              height="100%"
              image=""
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
                backgroundColor: "rgba(0, 0, 0, 0.5) !important",
                "&:hover": {
                  top: 0,
                  opacity: 1,
                },
              }}
            >
              <Box sx={{ position: "absolute", top: "60px" }}>
                <Box sx={{ width: "75%", marginLeft: "12px" }}>
                  <Typography gutterBottom variant="h5" component="div">
                    {""}
                  </Typography>
                  <Typography variant="body2" color="ffffff">
                    {""}
                  </Typography>
                  <Button variant="contained" size="small" sx={{marginTop:"20px"}}>
                  {
                  ""
                  }
                  </Button>
                </Box>
              </Box>
            </CardContent>
          </CardActionArea>
        </Card>
      )}
    </Container>
  );
}

export default Cards;
