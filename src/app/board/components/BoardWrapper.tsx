"use client";
import { Stack } from "@mui/material";
import { motion } from "motion/react";
import { TicketListWrapper } from ".";
import { useTicketStore } from "@/data/Ticket.data";
import { Section } from "@/types/Ticket.type";

function BoardWrapper({
  id,
}: Readonly<{
  id: string;
}>) {
  const tickets = useTicketStore((state) => state.tickets).filter(
    (item) => item.board === id
  );
  return (
    <motion.div>
      <Stack
        flexDirection={"row"}
        gap={4}
        p={2}
        overflow={"auto"}
        sx={{ scrollbarWidth: "none" }}
      >
        <TicketListWrapper
          id={`todo-${id}`}
          title={"To Do"}
          tickets={tickets.filter((item) => item.section === Section.todo)}
        />
        <TicketListWrapper
          id={`inprogress-${id}`}
          title={"In Progress"}
          tickets={tickets.filter(
            (item) => item.section === Section.inProgress
          )}
        />
        <TicketListWrapper
          id={`done-${id}`}
          title={"Done"}
          tickets={tickets.filter((item) => item.section === Section.done)}
        />
      </Stack>
    </motion.div>
  );
}
export default BoardWrapper;
