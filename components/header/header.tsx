"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import CloseIcon from "@mui/icons-material/Close";
import { navItem } from "./constants";
import Link from "next/link";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = "100%";

export default function DrawerAppBar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Box
        component="div"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingY: "15px",
          paddingX: "15px",
          backgroundColor: "#141414",
          color: "white",
          width: "100%",
        }}
      >
        <Box sx={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <AutoStoriesIcon />
          <Typography>Shax_coder</Typography>
        </Box>
        <CloseIcon className="cursor-pointer" />
      </Box>
      <Divider />
      <List>
        {navItem.map((item) => (
          <ListItem key={item.route} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <Link href={item.route} className="text-white">
                {item.label}
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex", paddingY: "20px" }}>
      <AppBar component="nav" sx={{ backgroundColor: "#141414" }}>
        <Toolbar className="flex justify-between">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            component="div"
            sx={{
              display: {
                xs: "none",
                sm: "flex",
                alignItems: "center",
                gap: "10px",
              },
              backgroundColor: "#141414",
            }}
          >
            <AutoStoriesIcon />
            <Typography>Shax_coder</Typography>
          </Box>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItem.map((item) => (
              <Link key={item.route} href={item.route} className="mx-4">
                {item.label}
              </Link>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            backgroundColor: "#141414",
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "#141414",
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}
