import React, { useState } from "react";

function InventoryManagement() {
  const inventoryItems = [
    {
      id: "INV-001",
      name: "Laptops",
      inStock: 24,
      reorderLevel: 10,
      status: "OK",
      statusColor: "bg-green-100 text-green-800",
    },
    {
      id: "INV-002",
      name: "Office Chairs",
      inStock: 5,
      reorderLevel: 10,
      status: "Low",
      statusColor: "bg-yellow-100 text-yellow-800",
    },
    {
      id: "INV-003",
      name: "Monitors",
      inStock: 2,
      reorderLevel: 8,
      status: "Critical",
      statusColor: "bg-red-100 text-red-800",
    },
  ];

  return (
    <div className="p-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 space-y-4 md:space-y-0">
        <h2 className="text-xl font-medium text-gray-800">
          Inventory & Reorder Alerts
        </h2>
        <div className="flex space-x-3">
          <button className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg bg-white text-blue-600 hover:bg-gray-50 transition-colors duration-150">
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              ></path>
            </svg>
            Export
          </button>
          <button className="flex items-center justify-center px-4 py-2 border border-transparent rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-150">
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              ></path>
            </svg>
            Add Item
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              <th className="px-6 py-3">Item ID</th>
              <th className="px-6 py-3">Name</th>
              <th className="px-6 py-3">In Stock</th>
              <th className="px-6 py-3">Reorder Level</th>
              <th className="px-6 py-3">Status</th>
              <th className="px-6 py-3">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {inventoryItems.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-blue-600 font-medium">
                  {item.id}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-900">
                  {item.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-900">
                  {item.inStock}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-900">
                  {item.reorderLevel}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-3 py-1 inline-flex text-sm leading-5 font-medium rounded-full ${item.statusColor}`}
                  >
                    {item.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex space-x-2">
                    <button className="text-gray-500 hover:text-gray-700">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                        ></path>
                      </svg>
                    </button>
                    {item.status !== "OK" ? (
                      <button className="px-3 py-1 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700">
                        Reorder
                      </button>
                    ) : (
                      <button className="px-3 py-1 bg-gray-600 text-white text-sm font-medium rounded-md hover:bg-gray-700">
                        Order
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Alert box */}
      <div className="mt-6 border-l-4 border-yellow-400 bg-yellow-50 p-4 flex">
        <div className="flex-shrink-0">
          <svg
            className="h-5 w-5 text-yellow-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="ml-3">
          <p className="text-sm text-yellow-700">
            Attention: Some items are below reorder level. Review and place
            orders as needed.
          </p>
        </div>
      </div>
    </div>
  );
}

export default InventoryManagement;
