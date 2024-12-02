"use client";
import {
  Dialog,
  DialogContent,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { X } from "@phosphor-icons/react";
import { TicketDialogProps } from "./TicketDialogTypes";
import { AddTicket } from "../forms";
import { theme } from "@/styles/theme";

function TicketDialog({
  open,
  onClickOpenDialog,
  section,
  board,
}: TicketDialogProps) {
  return (
    <Dialog
      open={open}
      onClose={onClickOpenDialog}
      sx={{
        ".MuiPaper-root": { backgroundColor: theme.palette.background.default },
      }}
    >
      <DialogContent
        sx={{
          width: 350,
          p: 4,
        }}
      >
        <Stack
          width="100%"
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          height={22}
        >
          <Typography>TicketForm</Typography>
          <IconButton onClick={() => onClickOpenDialog()}>
            <X size={20} />
          </IconButton>
        </Stack>
        <AddTicket
          section={section}
          board={board}
          onClickOpenDialog={onClickOpenDialog}
        />
      </DialogContent>
    </Dialog>
  );
}

export default TicketDialog;
