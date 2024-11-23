"use client";

import TicketList from "..";
import { TicketListType } from "../TicketList.type";

function TicketListWrapper(props: TicketListType) {
  return <TicketList {...props} />;
}
export default TicketListWrapper;
