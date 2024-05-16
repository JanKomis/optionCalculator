//import { getStrategyBySlug } from "@/lib/data";
import { getOption, getStrategyById, getOptionsByStrategySlug } from "@/lib/query";

export default async function Strategy({ params }) {
  //const strategy = await getStrategyBySlug(params.strategySlug);
  //console.log(strategy);
  const options = await getOption("clw8vsjh30002y7c9mdr7flmk");

  
  //console.log(options);
  return (
    <>
      <header>
        <h1>Option strategy</h1>
      </header>
      <main></main>
    </>
  );
}

//<p>{strategy.description}</p>