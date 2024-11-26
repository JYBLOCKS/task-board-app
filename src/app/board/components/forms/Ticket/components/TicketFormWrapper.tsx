"use client";
import TicketForm from "..";
import { TicketFromProps } from "../TicketFormTypes";

function TicketFormWrapper(props: TicketFromProps) {
  return <TicketForm {...props} />;
}
export default TicketFormWrapper;
