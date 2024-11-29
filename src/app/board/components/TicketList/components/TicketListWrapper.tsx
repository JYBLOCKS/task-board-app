import TicketList from "..";
import { TicketListType } from "../../../../../types/TicketList.type";

function TicketListWrapper(props: TicketListType) {
  return <TicketList {...props} />;
}
export default TicketListWrapper;
