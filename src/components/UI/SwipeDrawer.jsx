import * as React from "react";
import { styled } from "@mui/material/styles";
import { Box, Divider } from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";

import Header from "../Header/Header";
import NavList from "../Navigation/NavList";

const drawerWidth = 260;

const openedMixin = (theme) => ({
  width: drawerWidth,
  borderRight: "none",
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  borderRight: "none",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const SwipeDrawer = () => {
  const [open, setOpen] = React.useState(true);

  const handleDrawer = () => {
    setOpen((prevState) => !prevState);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Header handleDrawer={handleDrawer} open={open} />
      <Drawer variant="permanent" open={open}>
        <DrawerHeader> </DrawerHeader>
        <Divider />
        <NavList open={open} />
      </Drawer>
    </Box>
  );
};

export default SwipeDrawer;
