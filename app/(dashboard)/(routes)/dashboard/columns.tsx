"use client";

import { ColumnDef } from "@tanstack/react-table";

export type Jet = {
  name: string;
  wingspan: number;
  engines: number;
  year: number;
};

export const columns: ColumnDef<Jet>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "wingspan",
    header: "Wingspan",
  },
  {
    accessorKey: "engines",
    header: "Engines",
  },
  {
    accessorKey: "year",
    header: "Year",
  },
];
