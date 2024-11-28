"use client";

import {
  Card,
  CardContent,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { TicketWrapper, TicketDialogWrapper } from "../";
import { TicketListType } from "./TicketList.type";
import { theme } from "@/styles/theme";
import { Plus } from "@phosphor-icons/react";
import { useOpenDialog } from "@/hooks/useOpenDialog";

function TicketList(props: TicketListType) {
  const { open, onClickOpenDialog } = useOpenDialog();
  return (
    <>
      <Card
        sx={{
          display: "fixed",
          minWidth: 308,
          minHeight: 200,
          borderRadius: "10px",
          zIndex: 0,
          background: theme.palette.primary.main,
        }}
      >
        <CardContent sx={{ width: "100%" }}>
          <Stack
            flexDirection={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
            mb={2}
          >
            <Typography
              variant={"h4"}
              sx={{ color: theme.palette.secondary.main, fontSize: 14 }}
            >
              {props.title}
            </Typography>
            <IconButton onClick={onClickOpenDialog}>
              <Plus size={18} color={theme.palette.secondary.main} />
            </IconButton>
          </Stack>
          <Stack flexDirection={"column"} spacing={2}>
            {props.tickets.map((item) => (
              <TicketWrapper key={item.id} {...item} />
            ))}
          </Stack>
        </CardContent>
      </Card>
      <TicketDialogWrapper open={open} onClickOpenDialog={onClickOpenDialog} />
    </>
  );
}
export default TicketList;
