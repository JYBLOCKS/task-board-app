"use client";
import { Stack, TextField } from "@mui/material";
import { description, name } from "./AddTicket.constants";

function AddTicket() {
  return (
    <Stack flexDirection="column" spacing={2} my={2}>
      <TextField placeholder={name} fullWidth variant="outlined" />
      <TextField placeholder={description} fullWidth variant="outlined" />
    </Stack>
  );
}
export default AddTicket;
