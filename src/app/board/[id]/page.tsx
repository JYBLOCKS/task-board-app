import { Stack } from "@mui/material";
import { TicketListWrapper, BoardWrapper } from "../components";

export default async function Board({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const date = new Date();
  const time = `${date.getHours()}: ${
    date.getMinutes() > 10 ? date.getMinutes() : "0" + date.getMinutes()
  }, ${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`;
  return (
    <BoardWrapper>
      <Stack flexDirection={"row"} gap={4} m={4}>
        <TicketListWrapper
          id={`todo-${id}`}
          title={"To Do"}
          tickets={[
            {
              id: "ticket-1",
              name: "ticket-1",
              description: "ticket-description-jejejejejejejejejejejejejejeje",
              create_at: time,
              position: `todo-${id}`,
            },
            {
              id: "ticket-2",
              name: "ticket-2",
              description: "ticket-description",
              create_at: time,
              position: `todo-${id}`,
            },
            {
              id: "ticket-3",
              name: "ticket-3",
              description: "ticket-description",
              create_at: time,
              position: `todo-${id}`,
            },
            {
              id: "ticket-4",
              name: "ticket-4",
              description: "ticket-description",
              create_at: time,
              position: `todo-${id}`,
            },
            {
              id: "ticket-5",
              name: "ticket-5",
              description: "ticket-description",
              create_at: time,
              position: `todo-${id}`,
            },
          ]}
        />
        <TicketListWrapper
          id={`inprogress-${id}`}
          title={"In Progress"}
          tickets={[]}
        />
        <TicketListWrapper id={`done-${id}`} title={"Done"} tickets={[]} />
      </Stack>
    </BoardWrapper>
  );
}
