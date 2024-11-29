import { BoardWrapper } from "../components";

export default async function Board({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id.toLowerCase();
  return <BoardWrapper id={id} />;
}
