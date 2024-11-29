import TicketForm from "..";
import { TicketDialogProps } from "../TicketDialogTypes";

function TicketDialogWrapper(props: TicketDialogProps) {
  return <TicketForm {...props} />;
}
export default TicketDialogWrapper;
