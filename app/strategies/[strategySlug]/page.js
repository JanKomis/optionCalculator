import { getStrategyBySlug } from "@/lib/data";

export default async function Strategy({ params }) {
  const strategy = await getStrategyBySlug(params.strategySlug);
  console.log(strategy);
  return (
    <>
      <header>
        <h1>{strategy.title}</h1>
        <p>{strategy.description}</p>
      </header>
      <main>
        <DataTable columns={columns} data={data} />
      </main>
    </>
  );
}
