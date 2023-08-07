import React, { useEffect, useState } from "react";
import {
  AppBar,
  Grid,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  TextField,
  InputAdornment,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import Drower from "./Drower";


function Header() {
  const [indicatorCol, setIndicatoeCol] = useState(0);
  const pages = ["Home","Movies","TV Shows"];
  const theme = useTheme();
  const smScreenTrue = useMediaQuery(theme.breakpoints.down("md"));
  const [isSticky ,setIsSticky]=useState(false);



  useEffect(()=>{
    const handleScroll = () => {
      if (window.scrollY > 40) { 
        setIsSticky(true)
      } else {
      setIsSticky(false)
      }
    };
    window.onscroll=handleScroll;


  },[])
  
  const InputField = () => {
    return (
      <TextField
        xs={{ color: "#ffffff" }}
        id="standard-basic"
        label="search.."
        variant="filled"
        sx={{
          "& input": {
            color: "#ffffff",
            borderColor: "#ffffff",
          },
          "& label": {
            color: "#ffffff",
          },
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon sx={{ color: "#ffffff" }} />
            </InputAdornment>
          ),
        }}
      />
    );
  };


  return (
    <AppBar  sx={{ background: "rgba(18, 18, 18, 0.89)" ,position : isSticky? " sticky" : "static"}} >
    
      <Toolbar>
        {smScreenTrue ? (
          <Grid container justifyContent="center" alignItems="center">
            <Grid item xs={3.5}>
              <Link to="/">
              <Typography>PlayMax</Typography>
              </Link>
            </Grid>
            <Grid item xs={6} mb={1}>
              <InputField />
            </Grid>
            <Drower pages={pages} />
          </Grid>
        ) : (
          <Grid container justifyContent="center" alignItems="center">
            <Grid item xs={1.5}>
            <Link to="/">
              <Typography sx={{color:"#ffffff"}}>PlayMax</Typography>
              </Link>
            </Grid>

            <Grid item xs={7}>
              <Tabs
                indicatorColor="primary"
                textColor="inherit"
                value={indicatorCol}
                onChange={(e, val) => setIndicatoeCol(val)}
                sx={{
                  "& .MuiTabs-indicator": {
                    backgroundColor: "#ffffff",
                  },
                }}
              >
                {pages.map((page, index) => {
                  return (
                    <Tab
                      key={index}
                      label={page}
                      component={Link}
                      to={page.toLowerCase().replace(/\s+/g, "_") === "home" ? "/" : "/header/" + page.toLowerCase().replace(/\s+/g, "_")}
                    />
                  );
                })}
              </Tabs>
            </Grid>
            <Grid item xs={3} mb={1}>
              <InputField />
            </Grid>
          </Grid>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Header;
