import { Section, TicketType } from "./Ticket.type";

export type TicketListType = {
  id: string;
  title: string;
  section: Section;
  board: string;
  tickets: TicketType[];
};
