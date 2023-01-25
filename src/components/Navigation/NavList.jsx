import * as React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import {
  LightbulbOutlined,
  ArchiveOutlined,
  DeleteOutlineOutlined,
} from "@mui/icons-material";

const NavList = ({ open }) => {
  const navList = [
    { id: 1, name: "Notes", icon: <LightbulbOutlined />, route: "/" },
    { id: 2, name: "Archive", icon: <ArchiveOutlined />, route: "/archive" },
    { id: 3, name: "Trash", icon: <DeleteOutlineOutlined />, route: "/trash" },
  ];

  const { pathname } = useLocation();

  return (
    <List style={{ marginTop: "5px", color: "#202124" }}>
      {navList.map((list) => (
        <ListItem
          key={list.id}
          disablePadding
          sx={{
            display: "block",
          }}
        >
          <Link
            to={list.route}
            style={{ color: "#202124", textDecoration: "none" }}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
                borderRadius: "0px 25px 25px 0px",
                backgroundColor: pathname === list.route && "#4fbaf5",
                "&:hover": {
                  backgroundColor: pathname === list.route && "#4fbaf5",
                },
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                {list.icon}
              </ListItemIcon>
              <ListItemText
                primary={list.name}
                primaryTypographyProps={{ fontSize: "15px", fontWeight: 500 }}
                sx={{
                  opacity: open ? 1 : 0,
                  color: "#202124",
                }}
              />
            </ListItemButton>
          </Link>
        </ListItem>
      ))}
    </List>
  );
};

export default NavList;
