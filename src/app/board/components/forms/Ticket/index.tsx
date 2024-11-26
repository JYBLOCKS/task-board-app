"use client";
import {
  Dialog,
  DialogContent,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { X } from "@phosphor-icons/react";
import { TicketFromProps } from "./TicketFormTypes";

function TicketForm({ open, onClickOpenDialog }: TicketFromProps) {
  return (
    <Dialog open={open} onClose={onClickOpenDialog}>
      <DialogContent sx={{ width: 350 }}>
        <Stack
          width={"100%"}
          flexDirection={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Typography>TicketForm</Typography>
          <IconButton onClick={() => onClickOpenDialog()}>
            <X size={20} />
          </IconButton>
        </Stack>
      </DialogContent>
    </Dialog>
  );
}

export default TicketForm;