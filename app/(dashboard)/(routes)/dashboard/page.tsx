import { Button } from "@/components/ui/button";
import { Jet, columns } from "./columns";
import { DataTable } from "./data-table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

async function getData(): Promise<Jet[]> {
  // Fetch data from your API here.
  return [
    {
      name: "Gulfstream G650",
      wingspan: 99.7,
      engines: 2,
      year: 2012,
    },
    {
      name: "Bombardier Global 7500",
      wingspan: 104,
      engines: 2,
      year: 2018,
    },
    {
      name: "Cessna Citation Longitutde",
      wingspan: 68.5,
      engines: 2,
      year: 2017,
    },
  ];
}

export default async function DashboardPage() {
  const data = await getData();

  return (
    <div>
      <p>Jet.Ai Comparison Tool</p>
      <div className="container mx-auto py-10">
        <p>Top 10 Charter Jets</p>
        <DataTable columns={columns} data={data} />
      </div>
      <div>
        Ask OpenAI to compare selected jets by
        <DropdownMenu>
          <DropdownMenuTrigger>Top Speed</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Top Speed</DropdownMenuItem>
            <DropdownMenuItem>Fuel Efficiency</DropdownMenuItem>
            <DropdownMenuItem>Maximum Seats</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Button>Compare</Button>
      </div>
    </div>
  );
}
