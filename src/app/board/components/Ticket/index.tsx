"use client";

import { Card, CardContent, Typography } from "@mui/material";
import { TicketType } from "./Ticket.type";

function Ticket({ id, name, description, create_at }: TicketType) {
  console.log(id);
  return (
    <>
      <Card sx={{ minWidth: 275, borderRadius: "10px" }}>
        <CardContent>
          <Typography sx={{ color: "secondary", fontSize: 14 }}>
            {name}
          </Typography>
          <Typography sx={{ color: "secondary", mb: 1.5 }}>
            {create_at}
          </Typography>
          <Typography variant="body2">{description}</Typography>
        </CardContent>
      </Card>
    </>
  );
}
export default Ticket;
