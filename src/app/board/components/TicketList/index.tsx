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

function TicketList({ tickets, title, id, board, section }: TicketListType) {
  const { open, onClickOpenDialog } = useOpenDialog();
  const height = () => {
    if (tickets.length < 1) return 65;
    if (tickets.length === 1) return 183;
    const finalHeight = 183 * tickets.length;
    if (tickets.length === 3) return finalHeight - 130;
    return finalHeight - 65;
  };
  const getColor = () => {
    const gray = "#b4b4b4";
    const yellow = "#e3d311";
    const green = "#22ac3e";
    if (id.match("todo")) {
      return gray;
    }
    if (id.match("inprogress")) {
      return yellow;
    }
    if (id.match("done")) {
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
          maxHeight: height(),
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
              {title}
            </Typography>
            <IconButton onClick={onClickOpenDialog}>
              <Plus size={18} color="white" />
            </IconButton>
          </Stack>
          <Stack flexDirection={"column"} spacing={2}>
            {tickets.map((item) => (
              <TicketWrapper key={item.id} {...item} />
            ))}
          </Stack>
        </CardContent>
      </Card>
      <TicketDialogWrapper
        open={open}
        onClickOpenDialog={onClickOpenDialog}
        section={section}
        board={board}
      />
    </>
  );
}
export default TicketList;
