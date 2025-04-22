import React from "react";
import VendorTable from "./VendorTable";
import RecentOrders from "./RecentOrders";
import RecentAlerts from "./RecentAlerts";
import Hero from "./Hero";

function Home() {
  return (
    <div className="bg-[#f4f3f8] min-h-screen overflow-x-hidden">
      <Hero />
      <VendorTable />
      <RecentOrders />
      <RecentAlerts />
    </div>
  );
}

export default Home;
