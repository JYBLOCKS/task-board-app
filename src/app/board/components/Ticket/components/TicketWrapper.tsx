import Ticket from "..";
import { TicketType } from "../../../../../types/Ticket.type";

function TicketWrapper(props: TicketType) {
  return <Ticket {...props} />;
}
export default TicketWrapper;
