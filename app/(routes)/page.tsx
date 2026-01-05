import { BookOpenCheck, UsersRound, Waypoints } from "lucide-react";
import { CardSumary } from "./components/CardSumary";
import { LastCustomers } from "./components/LastCustomers";

export const DataCardSumary = [
  {
    icon: UsersRound,
    total: "12.450",
    average: 15,
    title: "Companies created",
    totaltipText: "See all the companies created",
  },
  {
    icon: Waypoints,
    total: "86.5%",
    average: 80,
    title: "Total Revenue",
    totaltipText: "See all of the summary",
  },
  {
    icon: BookOpenCheck,
    total: "363,95€",
    average: 30,
    title: "Bounce Rate",
    totaltipText: "See all the bounce rates",
  },
];

export default function Home() {
  return (
    <div>
      <h2 className="text-2xl mb-4">Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-x-20">
        {DataCardSumary.map((card, index) => (
          <CardSumary key={index} {...card} />
        ))}
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-2 md:gap-x-10 mt-12">
        <LastCustomers />
        <p className="text-xl">Sales Distributors</p>
      </div>
      <div>
        <p>Customer table</p>
      </div>
    </div>
  );
}
