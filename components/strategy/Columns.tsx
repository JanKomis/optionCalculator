"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Option } from "@/lib/types";




export const columns: ColumnDef<Option>[] = [
  {
    accessorKey: "trade",
    header: "Type of Trade",
  },
  {
    accessorKey: "spotPrice",
    header: "Spot Price",
  },
  {
    accessorKey: "strikePrice",
    header: "Strike Price",
  },
  {
    accessorKey: "expirationDate",
    header: "Exp. Date",
  },
  {
    accessorKey: "volatility",
    header: "Volatility",
  },
  {
    accessorKey: "interestRate",
    header: "Int. Rate",
  },
  {
    accessorKey: "dividend",
    header: "Dividend",
  },
  {
    accessorKey: "openPrice",
    header: "Open Price",
  },
  {
    accessorKey: "GrDelta",
    header: "Delta",
  },
  {
    accessorKey: "GrGama",
    header: "Gamma",
  },
  {
    accessorKey: "GrTheta",
    header: "Theta",
  },
  {
    accessorKey: "GrVega",
    header: "Vega",
  },
  {
    accessorKey: "OptionPrice",
    header: "Option Price",
  },
];
