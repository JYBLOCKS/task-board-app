import { TicketType } from "./Ticket.type";

export type TicketListType = {
  id: string;
  title: string;
  tickets: TicketType[];
};
