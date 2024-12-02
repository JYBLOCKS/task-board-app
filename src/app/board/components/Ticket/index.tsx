"use client";

import {
  Card,
  CardContent,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { TicketType } from "../../../../types/Ticket.type";
import { theme } from "@/styles/theme";
import { DotsThree } from "@phosphor-icons/react";
import MenuButton from "./components/MenuBasic";
import { useOpenMenu } from "./hooks/useOpenMenu";

function Ticket({ id, name, description, create_at }: TicketType) {
  const { open, anchorEl, handleClose, handleClick } = useOpenMenu();
  return (
    <>
      <Card
        sx={{
          minWidth: 275,
          borderRadius: "10px",
          zIndex: 1000,
          backgroundColor: theme.palette.primary.main + "50",
        }}
      >
        <Stack
          flexDirection="row"
          justifyContent="space-between"
          alignItems="flex-start"
          px={1}
          pt={0.5}
        >
          <Typography color="white" variant="h5" px={1} pt={1.5}>
            {name}
          </Typography>
          <IconButton onClick={handleClick}>
            <DotsThree size={20} color="white" />
          </IconButton>
          <MenuButton
            id={id}
            open={open}
            anchorEl={anchorEl}
            handleClose={handleClose}
          />
        </Stack>
        <CardContent
          sx={{
            pt: 0,
            ":last-child": { pb: 1 },
          }}
        >
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
