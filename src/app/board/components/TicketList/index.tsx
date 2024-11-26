"use client";

import { Card, CardContent, Stack, Typography } from "@mui/material";
import TicketWrapper from "../Ticket/components/TicketWrapper";
import { TicketListType } from "./TicketList.type";
import { theme } from "@/styles/theme";

function TicketList(props: TicketListType) {
  return (
    <Card
      sx={{
        display: "fixed",
        minWidth: 308,
        borderRadius: "10px",
        zIndex: 0,
        background: theme.palette.primary.main,
      }}
    >
      <CardContent>
        <Typography
          variant={"h4"}
          sx={{ color: theme.palette.secondary.main, fontSize: 14, mb: 2 }}
        >
          {props.title}
        </Typography>
        <Stack flexDirection={"column"} spacing={2}>
          {props.tickets.map((item) => (
            <TicketWrapper key={item.id} {...item} />
          ))}
        </Stack>
      </CardContent>
    </Card>
  );
}
export default TicketList;
