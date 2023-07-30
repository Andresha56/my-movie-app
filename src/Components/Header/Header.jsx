import React, { useState } from "react";
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
  const pages = ["Home", "Recenetly Release", "Top Rated"];
  const theme = useTheme();
  const smScreenTrue = useMediaQuery(theme.breakpoints.down("md"));


  
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
    <AppBar sx={{ background: "#162239F2" ,position:"static"}} >
      <Toolbar>
        {smScreenTrue ? (
          <Grid container justifyContent="center" alignItems="center">
            <Grid item xs={3.5}>
              <Typography>PlayMax</Typography>
            </Grid>
            <Grid item xs={6} mb={1}>
              <InputField />
            </Grid>
            <Drower pages={pages} />
          </Grid>
        ) : (
          <Grid container justifyContent="center" alignItems="center">
            <Grid item xs={1.5}>
              <Typography>PlayMax</Typography>
            </Grid>

            <Grid item xs={7}>
              <Tabs
                indicatorColor="primary"
                textColor="inherit"
                value={indicatorCol}
                onChange={(e, val) => setIndicatoeCol(val)}
                sx={{
                  "& .MuiTabs-indicator": {
                    backgroundColor: "#ffffff", // Set the indicator color to white (#ffffff)
                  },
                }}
              >
                {pages.map((page, index) => {
                  return (
                    <Tab
                      key={index}
                      label={page}
                      component={Link}
                      to={`/${
                        page.toLowerCase().replace(" ", "-") === "home"
                          ? ""
                          : page.toLowerCase().replace(" ", "-")
                      }`}
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
