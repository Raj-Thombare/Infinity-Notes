import * as React from "react";
import { styled } from "@mui/material/styles";
import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import { Menu } from "@mui/icons-material";

// const drawerWidth = 240;

const HeaderBar = styled(AppBar)`
  z-index: 1201;
  background: #fff;
  height: 70px;
  box-shadow: inset 0 -1px 0 0 #dadce0;
`;

const Heading = styled(Typography)`
  color: #5f6368;
  font-size: 24px;
`;

const Header = ({ open, handleDrawer }) => {
  return (
    <HeaderBar open={open}>
      <Toolbar>
        <IconButton
          onClick={handleDrawer}
          edge="start"
          sx={{
            marginRight: 5,
          }}
        >
          <Menu />
        </IconButton>
        <Heading variant="h6" noWrap component="div">
          Infinity Notes
        </Heading>
      </Toolbar>
    </HeaderBar>
  );
};

export default Header;
