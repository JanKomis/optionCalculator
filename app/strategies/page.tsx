import { columns } from "@/components/strategies/Columns";
import { DataTable } from "@/components/strategies/DataTable";
import { getAllStrategies } from "@/lib/query";
//import { getAllStrategies } from "@/lib/data";

export default async function Page() {
  const data = await getAllStrategies();

  return (
    <main>
      <DataTable columns={columns} data={data} />
    </main>
  );
}
