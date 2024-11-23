"use client";
import Ticket from "..";
import { TicketType } from "../Ticket.type";

function TicketWrapper(props: TicketType) {
  return <Ticket {...props} />;
}
export default TicketWrapper;
