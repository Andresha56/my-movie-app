import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import {Link} from "react-router-dom"
import { useState } from "react";
import WidgetsRoundedIcon from "@mui/icons-material/WidgetsRounded";

function Drower({ pages }) {
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleListItemClick = (index) => {
    setSelectedIndex(index);
    // Add your logic for handling the click event here if needed
  };

  return (
    <>
      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{ sx: { background: "#162239F2" } }}
      >
        <List>
          {pages.map((page, index) => (
            <ListItemButton
              key={index}
              component={Link}
              to={`/${
                page.toLowerCase().replace(" ", "-") === "home"
                  ? ""
                  : page.toLowerCase().replace(" ", "-")
              }`}
              selected={selectedIndex === index}
              onClick={() => handleListItemClick(index)}
            >
              <ListItemText
                primaryTypographyProps={{ sx: { color: "#ffffff" } }}
                primary={page}
              />
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <IconButton
        sx={{ marginLeft: "auto", color: "#ffffff" }}
        onClick={() => {
          setOpen(true);
        }}
      >
        <WidgetsRoundedIcon />
      </IconButton>
    </>
  );
}

export default Drower;
