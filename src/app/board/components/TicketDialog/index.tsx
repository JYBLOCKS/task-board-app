"use client";
import {
  Button,
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

function TicketDialog({ open, onClickOpenDialog }: TicketDialogProps) {
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
        <AddTicket />

        <Stack flexDirection="row" justifyContent="space-between">
          <Button
            variant="outlined"
            color="error"
            onClick={() => onClickOpenDialog()}
          >
            <Typography variant="body2" fontWeight={"bold"}>
              Cancel
            </Typography>
          </Button>
          <Button
            variant="contained"
            color="success"
            type="submit"
            onClick={() => onClickOpenDialog()}
          >
            <Typography variant="body2" color="white" fontWeight={"bold"}>
              Success
            </Typography>
          </Button>
        </Stack>
      </DialogContent>
    </Dialog>
  );
}

export default TicketDialog;
