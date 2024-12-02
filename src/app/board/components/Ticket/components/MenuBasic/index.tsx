import { theme } from "@/styles/theme";
import { Menu, MenuItem, Typography } from "@mui/material";
import { Pencil, Trash } from "@phosphor-icons/react";
import React from "react";

interface MenuBasicProps {
  id: string;
  open: boolean;
  anchorEl: null | HTMLElement;
  handleClose: () => void;
}

function MenuBasic({ id, open, anchorEl, handleClose }: MenuBasicProps) {
  console.log(id);
  return (
    <Menu
      id="basic-menu"
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      MenuListProps={{
        "aria-labelledby": "basic-button",
      }}
    >
      <MenuItem onClick={handleClose}>
        <Pencil size={18} color={theme.palette.warning.main} />
        <Typography mx={2} color={theme.palette.warning.main}>
          Edit
        </Typography>
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <Trash size={18} color={theme.palette.error.main} />
        <Typography mx={2} color={theme.palette.error.main}>
          Delete
        </Typography>
      </MenuItem>
    </Menu>
  );
}

export default MenuBasic;
