import React, { useState } from "react";
import QuoteComparison from "./QuoteComparison";
import PODrafting from "./PODrafting";
import InventoryManagement from "./InventoryManagement";

function Procurement() {
  const [activeTab, setActiveTab] = useState("po-drafting");

  const tabs = [
    { id: "quote-comparison", label: "Quote Comparison" },
    { id: "po-drafting", label: "PO Drafting" },
    { id: "inventory-management", label: "Inventory Management" },
  ];
  return (
    <div>
      <section className="mb-8 lg:ml-20">
        <div className="m-3 flex flex-col">
          <h2 className="text-gray-600 font-bold text-2xl">Procurement</h2>
          <p className="font-normal">
            Quote Comparison, PO Drafting and Inventory Management
          </p>
        </div>
        <div className="flex felx-wrap gap-5 mb-8 items-center justify-around">
          <div className="bg-white p-5 rounded-lg shadow-sm w-64">
            <span className="block text-gray-600 text-s font-medium mb-2">
              Active Quotes
            </span>
            <span className="text-2xl font-bold text-gray-800">10</span>
          </div>
          <div className="bg-white p-5 rounded-lg shadow-sm w-64">
            <span className="block text-gray-600 text-s font-medium mb-2">
              Draft POs
            </span>
            <span className="text-2xl font-bold text-gray-800">2</span>
          </div>
          <div className="bg-white p-5 rounded-lg shadow-sm w-64">
            <span className="block text-gray-600 text-s font-medium mb-2">
              Inventory Alerts
            </span>
            <span className="text-2xl font-bold text-red-500">18</span>
          </div>
          <div className="bg-white p-5 rounded-lg shadow-sm w-64">
            <span className="block text-gray-600 text-s font-medium mb-2">
              Cost Savings
            </span>
            <span className="text-2xl font-bold text-gray-800">6</span>
          </div>
        </div>
      </section>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 mx-auto lg:ml-20 mt-5">
        {/* Tabs */}
        <div className="flex border-b border-gray-200 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`px-6 py-4 text-sm font-medium focus:outline-none whitespace-nowrap ${
                activeTab === tab.id
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {activeTab === "quote-comparison" ? (
        <QuoteComparison />
      ) : activeTab === "po-drafting" ? (
        <PODrafting />
      ) : (
        <InventoryManagement />
      )}
    </div>
  );
}

export default Procurement;
