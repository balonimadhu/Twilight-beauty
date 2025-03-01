import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import { useNavigate } from "react-router-dom";

export const DrawerComp = () => {
  const navigate = useNavigate();
  const pages = ["Home", "Eyes", "Skin", "Hair", "Fragrance"];
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleNavigation = (page) => {
    navigate(`/${page}`);
  };
  return (
    <>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <List>
          {pages.map((page, index) => (
            <ListItemButton key={index} onClick={() => handleNavigation(page)}>
              <ListItemIcon>
                <ListItemText>{page}</ListItemText>
              </ListItemIcon>
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuOpenIcon />
      </IconButton>
    </>
  );
};
