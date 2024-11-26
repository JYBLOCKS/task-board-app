"use client";

import { Card, CardContent, Typography } from "@mui/material";
import { TicketType } from "./Ticket.type";
import { theme } from "@/styles/theme";

function Ticket({ id, name, description, create_at }: TicketType) {
  console.log(id);
  return (
    <>
      <Card
        sx={{
          minWidth: 275,
          borderRadius: "10px",
          zIndex: 1000,
          backgroundColor: theme.palette.background.default + "7d",
        }}
      >
        <CardContent
          sx={{
            padding: 2,
            pb: 1,
            ":last-child": { pb: 1 },
          }}
        >
          <Typography color="white" variant="h5">
            {name}
          </Typography>
          <Typography
            variant="body2"
            color="white"
            width={240}
            noWrap
            mb={1.5}
            textOverflow={"ellipsis"}
          >
            {description}
          </Typography>
          <Typography
            color="white"
            fontSize={9}
            textAlign={"end"}
            right={0}
            bottom={0}
          >
            {create_at}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}
export default Ticket;
