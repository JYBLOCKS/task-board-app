export default async function Board({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  return <div> Hi {id}</div>;
}
