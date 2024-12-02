import { Section } from "@/types/Ticket.type";

export interface TicketDialogProps {
  section: Section;
  board: string;
  open: boolean;
  onClickOpenDialog: () => void;
}
