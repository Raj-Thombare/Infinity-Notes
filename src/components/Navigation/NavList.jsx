import * as React from "react";
import { Link } from "react-router-dom";
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
    { id: 1, name: "All Notes", icon: <LightbulbOutlined />, route: "/" },
    { id: 2, name: "Archieve", icon: <ArchiveOutlined />, route: "/archive" },
    { id: 3, name: "Trash", icon: <DeleteOutlineOutlined />, route: "/trash" },
  ];

  return (
    <List>
      {navList.map((list) => (
        <ListItem key={list.id} disablePadding sx={{ display: "block" }}>
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              <Link to={list.route}>{list.icon}</Link>
            </ListItemIcon>
            <ListItemText primary={list.name} sx={{ opacity: open ? 1 : 0 }} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};

export default NavList;
