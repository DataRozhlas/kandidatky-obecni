import { useState, useRef, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import FilterAltSharpIcon from "@mui/icons-material/FilterAltSharp";
import Toolbar from "@mui/material/Toolbar";

import Link from "../utils/Link";
import Image from "next/image";
import imgLoader from "../utils/imgLoader";
import Filters from "./Filters";

const drawerWidth = 200;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        position="fixed"
        sx={{
          zIndex: theme => theme.zIndex.drawer + 1,
          backgroundColor: "#f4f4f4",
          color: "#d52834",
          opacity: { sm: 0.9 },
        }}
      >
        <Toolbar sx={{ minHeight: { sm: "40px" } }}>
          <IconButton
            color="inherit"
            aria-label="filtrovat"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <FilterAltSharpIcon />
          </IconButton>
          <Link
            href="https://irozhlas.cz/"
            sx={{ ml: "auto", mr: { sm: "auto" } }}
          >
            <Image
              loader={imgLoader}
              alt="iROZHLAS.cz"
              src="https://data.irozhlas.cz/hrad-or-not/img/irozhlas.svg"
              height={40}
              width={120}
            ></Image>
          </Link>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          <Filters />
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          <Filters />
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        {props.children}
      </Box>
    </Box>
  );
}

export default ResponsiveDrawer;
