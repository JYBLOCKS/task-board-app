import { Section, TicketType } from "@/types/Ticket.type";
import { create } from "zustand";

const initialState: { tickets: TicketType[] } = {
  tickets: [
    {
      id: "ticket-1",
      name: "ticket-1",
      description: "ticket-description-jejejejejejejejejejejejejejeje",
      create_at: "12:00, 12-12-2012",
      section: Section.todo,
      board: "jose",
    },
    {
      id: "ticket-2",
      name: "ticket-2",
      description: "ticket-description",
      create_at: "12:00, 12-12-2012",
      section: Section.todo,
      board: "jose",
    },
    {
      id: "ticket-3",
      name: "ticket-3",
      description: "ticket-description",
      create_at: "12:00, 12-12-2012",
      section: Section.todo,
      board: "jose",
    },
    {
      id: "ticket-4",
      name: "ticket-4",
      description: "ticket-description",
      create_at: "12:00, 12-12-2012",
      section: Section.inProgress,
      board: "jose",
    },
    {
      id: "ticket-5",
      name: "ticket-5",
      description: "ticket-description",
      create_at: "12:00, 12-12-2012",
      section: Section.done,
      board: "jose",
    },
  ],
};

export const useTicketStore = create<{ tickets: TicketType[] }>((set) => ({
  ...initialState,
  addNewTicket: (ticket: TicketType) =>
    set((state) => ({ tickets: [...state.tickets, ticket] })),
  updateTicket: (ticket: TicketType) =>
    set((state) => {
      const ticketToUpdate = state.tickets.findIndex((item) => item.id);
      state.tickets[ticketToUpdate] = ticket;
      return state;
    }),
}));
