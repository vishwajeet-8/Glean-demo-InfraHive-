import React from "react";
import PurchaseOrders from "./PurchaseOrders";
import RecentActivity from "./RecentActivity";
import QuickActions from "./QuickActions";

function OrderManagement() {
  return (
    <div>
      <section className="mb-8 lg:ml-20">
        <div className="m-3 flex flex-col">
          <h2 className="text-gray-600 font-bold text-2xl">Order Management</h2>
          <p className="font-normal">Track and Manage Purchase Orders</p>
        </div>
        <div className="flex felx-wrap gap-5 mb-8 items-center justify-around">
          <div className="bg-white p-5 rounded-lg shadow-sm w-64">
            <span className="block text-gray-600 text-s font-medium mb-2">
              Total Orders
            </span>
            <span className="text-2xl font-bold text-gray-800">10</span>
          </div>
          <div className="bg-white p-5 rounded-lg shadow-sm w-64">
            <span className="block text-gray-600 text-s font-medium mb-2">
              Processing
            </span>
            <span className="text-2xl font-bold text-gray-800">2</span>
          </div>
          <div className="bg-white p-5 rounded-lg shadow-sm w-64">
            <span className="block text-gray-600 text-s font-medium mb-2">
              In Transit
            </span>
            <span className="text-2xl font-bold text-red-500">18</span>
          </div>
          <div className="bg-white p-5 rounded-lg shadow-sm w-64">
            <span className="block text-gray-600 text-s font-medium mb-2">
              Completed
            </span>
            <span className="text-2xl font-bold text-gray-800">6</span>
          </div>
        </div>
      </section>

      <PurchaseOrders />
      <RecentActivity />
      <QuickActions />
    </div>
  );
}

export default OrderManagement;
