"use client";
import { Stack, TextField } from "@mui/material";
import { description, name } from "./AddTicket.constants";

function AddTicket() {
  return (
    <Stack flexDirection="column" spacing={2} my={2}>
      <TextField
        label={name}
        placeholder={name}
        fullWidth
        variant="outlined"
        color="primary"
      />
      <TextField
        label={description}
        placeholder={description}
        fullWidth
        variant="outlined"
        color="primary"
      />
    </Stack>
  );
}
export default AddTicket;
