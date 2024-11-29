"use client";

import {
  Card,
  CardContent,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { TicketWrapper, TicketDialogWrapper } from "../";
import { TicketListType } from "../../../../types/TicketList.type";
import { Plus } from "@phosphor-icons/react";
import { useOpenDialog } from "@/hooks/useOpenDialog";

function TicketList(props: TicketListType) {
  const { open, onClickOpenDialog } = useOpenDialog();
  const maxHeight = () => {
    if (props.tickets.length < 1) return 65;
    return 183 * props.tickets.length;
  };
  const getColor = () => {
    const gray = "#b4b4b4";
    const yellow = "#e3d311";
    const green = "#22ac3e";
    if (props.id.match("todo")) {
      return gray;
    }
    if (props.id.match("inprogress")) {
      return yellow;
    }
    if (props.id.match("done")) {
      return green;
    }
    return gray;
  };
  return (
    <>
      <Card
        sx={{
          display: "fixed",
          minWidth: 308,
          maxHeight: maxHeight(),
          borderRadius: "10px",
          zIndex: 0,
          background: getColor(),
        }}
      >
        <CardContent sx={{ width: "100%" }}>
          <Stack
            flexDirection={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
            mb={2}
          >
            <Typography variant={"h4"} fontSize={14} color="white">
              {props.title}
            </Typography>
            <IconButton onClick={onClickOpenDialog}>
              <Plus size={18} color="white" />
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
