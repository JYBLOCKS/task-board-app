"use client";

import { Card, CardContent, Typography } from "@mui/material";
import TicketWrapper from "../Ticket/components/TicketWrapper";
import { TicketListType } from "./TicketList.type";
import { theme } from "@/styles/theme";

function TicketList(props: TicketListType) {
  return (
    <Card
      sx={{
        minWidth: 300,
        borderRadius: "10px",
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
        {props.tickets.map((item) => (
          <TicketWrapper key={item.id} {...item} />
        ))}
      </CardContent>
    </Card>
  );
}
export default TicketList;
