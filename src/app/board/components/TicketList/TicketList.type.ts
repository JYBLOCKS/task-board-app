import { TicketType } from "../Ticket/Ticket.type";

export type TicketListType = {
  id: string;
  title: string;
  tickets: TicketType[];
};
