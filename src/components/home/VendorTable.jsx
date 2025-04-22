import { useState } from "react";

const VendorTable = () => {
  const [vendors] = useState([
    {
      name: "Google",
      category: "Technology",
      score: 87,
      status: "Active",
    },
    {
      name: "Main Street",
      category: "Office Supplies",
      score: 76,
      status: "Active",
    },
    {
      name: "Microsoft",
      category: "Logistics",
      score: 92,
      status: "Active",
    },
    {
      name: "Hubspot",
      category: "Hardware",
      score: 67,
      status: "Warning",
    },
    {
      name: "Codat",
      category: "Software",
      score: 81,
      status: "Active",
    },
  ]);

  const getScoreColor = (score) => {
    if (score >= 85) return "text-green-500";
    if (score >= 75) return "text-amber-500";
    return "text-red-500";
  };

  return (
    <div className="m-4 p-4 sm:p-6 md:ml-20 rounded-lg shadow-md bg-white w-auto overflow-x-hidden">
      <h2 className="text-xl font-bold text-gray-700 mb-4">
        Top Performing Vendors
      </h2>

      <div className="max-w-full overflow-hidden">
        <div className="overflow-x-auto no-scrollbar">
          <table className="w-full border-collapse min-w-full table-fixed sm:table-auto">
            <thead>
              <tr className="bg-gray-50 border-b">
                <th className="py-3 px-2 sm:px-4 text-left text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider w-1/4">
                  Vendor
                </th>
                <th className="py-3 px-2 sm:px-4 text-left text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider w-1/4">
                  Category
                </th>
                <th className="py-3 px-2 sm:px-4 text-left text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider w-1/4">
                  Score
                </th>
                <th className="py-3 px-2 sm:px-4 text-left text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider w-1/4">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {vendors.map((vendor, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="py-2 sm:py-4 px-2 sm:px-4 text-xs sm:text-sm font-medium text-gray-800 truncate">
                    {vendor.name}
                  </td>
                  <td className="py-2 sm:py-4 px-2 sm:px-4 text-xs sm:text-sm text-gray-500 font-medium truncate">
                    {vendor.category}
                  </td>
                  <td className="py-2 sm:py-4 px-2 sm:px-4 text-xs sm:text-sm font-medium">
                    <span className={getScoreColor(vendor.score)}>
                      {vendor.score}%
                    </span>
                  </td>
                  <td className="py-2 sm:py-4 px-2 sm:px-4 text-xs sm:text-sm">
                    {vendor.status === "Active" ? (
                      <span className="inline-block px-2 py-1 sm:px-3 sm:py-1 text-xs sm:text-sm font-medium rounded-full bg-green-100 text-green-800">
                        Active
                      </span>
                    ) : (
                      <span className="inline-block px-2 py-1 sm:px-3 sm:py-1 text-xs sm:text-sm font-medium rounded-full bg-amber-100 text-amber-800">
                        Warning
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

export default VendorTable;
