export type TicketType = {
  id: string;
  name: string;
  description: string;
  create_at: string;
  section: Section;
  board: string;
};

export enum Section {
  "todo" = "todo",
  "inProgress" = "inProgress",
  "done" = "done",
}
