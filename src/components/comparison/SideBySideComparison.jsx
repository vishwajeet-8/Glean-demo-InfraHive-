import React from "react";
import { Check, X } from "lucide-react";

const SideBySideComparison = () => {
  return (
    <div className="mx-auto p-4 bg-white rounded-xl border border-gray-200 shadow-sm  lg:ml-24 md:ml-24 mt-4 mr-2">
      <h2 className="text-xl font-bold text-gray-800 mb-4">
        Side-by-Side Comparison
      </h2>

      {/* Desktop Table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="py-3 px-4 text-left font-medium text-gray-600">
                COMPARISON CRITERIA
              </th>
              <th className="py-3 px-4 text-left font-medium text-gray-600">
                TECH SOLUTIONS INC.
              </th>
              <th className="py-3 px-4 text-left font-medium text-gray-600">
                DATATECH SYSTEMS
              </th>
              <th className="py-3 px-4 text-left font-medium text-gray-600">
                GLOBAL IT SUPPLIES
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">Unit Price</td>
              <td className="py-3 px-4 text-blue-600">$2,500</td>
              <td className="py-3 px-4 text-blue-600">$2,100</td>
              <td className="py-3 px-4 text-blue-600">$1,900</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">Total Price</td>
              <td className="py-3 px-4 text-blue-600">$12,500</td>
              <td className="py-3 px-4 text-blue-600">$10,500</td>
              <td className="py-3 px-4 text-blue-600">$9,500</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">Delivery Time</td>
              <td className="py-3 px-4">15 days</td>
              <td className="py-3 px-4">20 days</td>
              <td className="py-3 px-4">30 days</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">Warranty</td>
              <td className="py-3 px-4">36 months</td>
              <td className="py-3 px-4">24 months</td>
              <td className="py-3 px-4">12 months</td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">Support Included</td>
              <td className="py-3 px-4">
                <Check className="w-5 h-5 text-green-500" />
              </td>
              <td className="py-3 px-4">
                <Check className="w-5 h-5 text-green-500" />
              </td>
              <td className="py-3 px-4">
                <X className="w-5 h-5 text-red-500" />
              </td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">Hidden Costs</td>
              <td className="py-3 px-4 text-green-500">None</td>
              <td className="py-3 px-4 text-red-500">
                Support renewal fee after 12 months
              </td>
              <td className="py-3 px-4 text-red-500">
                Support plan extra, Extended warranty fees
              </td>
            </tr>
            <tr className="border-b border-gray-200">
              <td className="py-3 px-4 font-medium">Vendor Score</td>
              <td className="py-3 px-4 font-semibold text-green-600">87%</td>
              <td className="py-3 px-4 font-semibold text-green-600">79%</td>
              <td className="py-3 px-4 font-semibold text-red-600">74%</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Mobile Accordion-style Cards */}
      <div className="md:hidden">
        {/* Tech Solutions Inc. */}
        <div className="mb-4 border border-gray-200 rounded-lg overflow-hidden">
          <div className="bg-gray-50 p-3 font-medium text-gray-800">
            TECH SOLUTIONS INC.
          </div>
          <div className="divide-y divide-gray-200">
            <div className="p-3 flex justify-between">
              <span className="text-gray-600">Unit Price</span>
              <span className="font-medium text-blue-600">$2,500</span>
            </div>
            <div className="p-3 flex justify-between">
              <span className="text-gray-600">Total Price</span>
              <span className="font-medium text-blue-600">$12,500</span>
            </div>
            <div className="p-3 flex justify-between">
              <span className="text-gray-600">Delivery Time</span>
              <span>15 days</span>
            </div>
            <div className="p-3 flex justify-between">
              <span className="text-gray-600">Warranty</span>
              <span>36 months</span>
            </div>
            <div className="p-3 flex justify-between items-center">
              <span className="text-gray-600">Support Included</span>
              <Check className="w-5 h-5 text-green-500" />
            </div>
            <div className="p-3 flex justify-between">
              <span className="text-gray-600">Hidden Costs</span>
              <span className="text-green-500">None</span>
            </div>
            <div className="p-3 flex justify-between">
              <span className="text-gray-600">Vendor Score</span>
              <span className="font-semibold text-green-600">87%</span>
            </div>
          </div>
        </div>

        {/* DataTech Systems */}
        <div className="mb-4 border border-gray-200 rounded-lg overflow-hidden">
          <div className="bg-gray-50 p-3 font-medium text-gray-800">
            DATATECH SYSTEMS
          </div>
          <div className="divide-y divide-gray-200">
            <div className="p-3 flex justify-between">
              <span className="text-gray-600">Unit Price</span>
              <span className="font-medium text-blue-600">$2,100</span>
            </div>
            <div className="p-3 flex justify-between">
              <span className="text-gray-600">Total Price</span>
              <span className="font-medium text-blue-600">$10,500</span>
            </div>
            <div className="p-3 flex justify-between">
              <span className="text-gray-600">Delivery Time</span>
              <span>20 days</span>
            </div>
            <div className="p-3 flex justify-between">
              <span className="text-gray-600">Warranty</span>
              <span>24 months</span>
            </div>
            <div className="p-3 flex justify-between items-center">
              <span className="text-gray-600">Support Included</span>
              <Check className="w-5 h-5 text-green-500" />
            </div>
            <div className="p-3 flex justify-between items-start">
              <span className="text-gray-600">Hidden Costs</span>
              <span className="text-red-500 text-right">
                Support renewal fee after 12 months
              </span>
            </div>
            <div className="p-3 flex justify-between">
              <span className="text-gray-600">Vendor Score</span>
              <span className="font-semibold text-green-600">79%</span>
            </div>
          </div>
        </div>

        {/* Global IT Supplies */}
        <div className="border border-gray-200 rounded-lg overflow-hidden">
          <div className="bg-gray-50 p-3 font-medium text-gray-800">
            GLOBAL IT SUPPLIES
          </div>
          <div className="divide-y divide-gray-200">
            <div className="p-3 flex justify-between">
              <span className="text-gray-600">Unit Price</span>
              <span className="font-medium text-blue-600">$1,900</span>
            </div>
            <div className="p-3 flex justify-between">
              <span className="text-gray-600">Total Price</span>
              <span className="font-medium text-blue-600">$9,500</span>
            </div>
            <div className="p-3 flex justify-between">
              <span className="text-gray-600">Delivery Time</span>
              <span>30 days</span>
            </div>
            <div className="p-3 flex justify-between">
              <span className="text-gray-600">Warranty</span>
              <span>12 months</span>
            </div>
            <div className="p-3 flex justify-between items-center">
              <span className="text-gray-600">Support Included</span>
              <X className="w-5 h-5 text-red-500" />
            </div>
            <div className="p-3 flex justify-between items-start">
              <span className="text-gray-600">Hidden Costs</span>
              <span className="text-red-500 text-right">
                Support plan extra, Extended warranty fees
              </span>
            </div>
            <div className="p-3 flex justify-between">
              <span className="text-gray-600">Vendor Score</span>
              <span className="font-semibold text-red-600">74%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBySideComparison;
