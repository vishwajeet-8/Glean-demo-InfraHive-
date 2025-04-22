
import { useState } from "react";

const RecentOrders = () => {
  const [vendors] = useState([
    {
      name: "PO-2025-001",
      category: "Google",
      score: "$12,500",
      status: "Delivered",
    },
    {
      name: "PO-2025-002",
      category: "Microsoft",
      score: "$3,750",
      status: "In Transit",
    },
    {
      name: "PO-2025-003",
      category: "Main Street",
      score: "$8,200",
      status: "Processing",
    },
  ]);

  return (
    <div className="m-3 sm:m-4 p-4 sm:p-6 md:ml-20 rounded-lg shadow-md bg-white w-auto overflow-x-hidden">
      <h2 className="text-lg sm:text-xl font-bold text-gray-700 mb-4">
        Recent Orders
      </h2>

      <div className="max-w-full overflow-hidden">
        <div className="overflow-x-auto no-scrollbar">
          <table className="w-full border-collapse min-w-full table-fixed sm:table-auto">
            <thead>
              <tr className="bg-gray-50 border-b">
                <th className="py-2 sm:py-3 px-2 sm:px-4 text-left text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider w-1/4">
                  PO #
                </th>
                <th className="py-2 sm:py-3 px-2 sm:px-4 text-left text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider w-1/4">
                  Vendor
                </th>
                <th className="py-2 sm:py-3 px-2 sm:px-4 text-left text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider w-1/4">
                  Amount
                </th>
                <th className="py-2 sm:py-3 px-2 sm:px-4 text-left text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider w-1/4">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {vendors.map((vendor, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="py-2 sm:py-4 px-2 sm:px-4 text-xs sm:text-sm font-medium text-blue-600 truncate">
                    {vendor.name}
                  </td>
                  <td className="py-2 sm:py-4 px-2 sm:px-4 text-xs sm:text-sm text-gray-500 font-medium truncate">
                    {vendor.category}
                  </td>
                  <td className="py-2 sm:py-4 px-2 sm:px-4 text-xs sm:text-sm font-medium">
                    <span>{vendor.score}</span>
                  </td>
                  <td className="py-2 sm:py-4 px-2 sm:px-4 text-xs sm:text-sm">
                    {vendor.status === "Delivered" ? (
                      <span className="inline-block px-2 py-0.5 sm:px-3 sm:py-1 text-xs sm:text-sm font-medium rounded-full bg-green-100 text-green-800">
                        Delivered
                      </span>
                    ) : vendor.status === "Processing" ? (
                      <span className="inline-block px-2 py-0.5 sm:px-3 sm:py-1 text-xs sm:text-sm font-medium rounded-full bg-amber-100 text-amber-800">
                        Processing
                      </span>
                    ) : (
                      <span className="inline-block px-2 py-0.5 sm:px-3 sm:py-1 text-xs sm:text-sm font-medium rounded-full bg-blue-100 text-blue-800">
                        In Transit
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RecentOrders;
