"use client";

import { ColumnDef } from "@tanstack/react-table";
import DataTableRowActions from "./DataTableRowActions";
import { StrategyRow } from "@/lib/types";



export const columns: ColumnDef<StrategyRow>[] = [
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "updatedAt",
    header: "Update at",
  },
  {
    id: "actions",
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
];
