import { Stack } from "@mui/material";
import { TicketListWrapper } from "../components";

export default async function Board({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  return (
    <Stack flexDirection={"row"} gap={4} m={4}>
      <TicketListWrapper
        id={`todo-${id}`}
        title={"To Do"}
        tickets={[
          {
            id: "ticket-1",
            name: "ticket-1",
            description: "ticket-description",
            create_at: new Date().toISOString(),
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
  );
}
