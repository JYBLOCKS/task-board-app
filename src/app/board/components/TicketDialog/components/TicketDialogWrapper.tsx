import TicketDialog from "..";
import { TicketDialogProps } from "../TicketDialogTypes";

function TicketDialogWrapper(props: TicketDialogProps) {
  return <TicketDialog {...props} />;
}
export default TicketDialogWrapper;
