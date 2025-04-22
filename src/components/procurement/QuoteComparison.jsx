import React, { useState } from "react";

function QuoteComparison() {
  const quotes = [
    {
      id: "QT-2025-001",
      item: "Server Equipment",
      vendor: "Codat",
      amount: "$12,500",
      status: "Approved",
      statusColor: "bg-green-100 text-green-800",
    },
    {
      id: "QT-2025-002",
      item: "Office Supplies",
      vendor: "Odetta",
      amount: "$3,750",
      status: "Pending",
      statusColor: "bg-yellow-100 text-yellow-800",
    },
    {
      id: "QT-2025-003",
      item: "Dwolla",
      vendor: "Quick Logistics",
      amount: "$8,200",
      status: "Reviewing",
      statusColor: "bg-blue-100 text-blue-800",
    },
  ];

  return (
    <div className="p-6 lg:ml-20">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 space-y-4 md:space-y-0">
        <h2 className="text-xl font-medium text-gray-800">Active Quotes</h2>
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
          <button className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors duration-150">
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
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              ></path>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              ></path>
            </svg>
            Compare Selected
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
            Request Quote
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              <th className="px-6 py-3">Quote ID</th>
              <th className="px-6 py-3">Item</th>
              <th className="px-6 py-3">Vendor</th>
              <th className="px-6 py-3">Amount</th>
              <th className="px-6 py-3">Status</th>
              <th className="px-6 py-3">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {quotes.map((quote) => (
              <tr key={quote.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-blue-600 font-medium">
                  {quote.id}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-900">
                  {quote.item}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-900">
                  {quote.vendor}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-900">
                  {quote.amount}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-3 py-1 inline-flex text-sm leading-5 font-medium rounded-full ${quote.statusColor}`}
                  >
                    {quote.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                  <div className="flex space-x-4">
                    <button className="hover:text-gray-700">
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
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        ></path>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        ></path>
                      </svg>
                    </button>
                    <button className="hover:text-gray-700">
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
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default QuoteComparison;
