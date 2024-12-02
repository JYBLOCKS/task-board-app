"use client";
import { Button, Stack, TextField, Typography } from "@mui/material";
import { description, name } from "./AddTicket.constants";
import { useForm } from "react-hook-form";
import { useTicketStore } from "@/data/Ticket.data";
import { Section } from "@/types/Ticket.type";
import { getTime } from "@/utils/get-time";

interface AddTicketFormProps {
  section: Section;
  board: string;
  onClickOpenDialog: () => void;
}

function AddTicket({ section, board, onClickOpenDialog }: AddTicketFormProps) {
  const { tickets, addNewTicket } = useTicketStore();
  const { register, handleSubmit } = useForm({
    values: { name: "", description: "" },
  });

  const onSubmit = (data: { name: string; description: string }) => {
    addNewTicket({
      id: `ticket-${tickets.length}`,
      name: data["name"],
      description: data["description"],
      create_at: getTime(),
      section,
      board,
    });
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack flexDirection="column" spacing={2} my={2}>
        <TextField
          label={name}
          placeholder={name}
          fullWidth
          variant="outlined"
          color="primary"
          {...register("name", { required: true })}
        />
        <TextField
          label={description}
          placeholder={description}
          fullWidth
          variant="outlined"
          color="primary"
          {...register("description", { required: false })}
        />
      </Stack>
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
    </form>
  );
}
export default AddTicket;
