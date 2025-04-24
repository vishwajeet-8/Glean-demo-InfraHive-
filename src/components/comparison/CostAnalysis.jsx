import React from "react";
import { Info } from "lucide-react";

const CostAnalysis = () => {
  return (
    <div className="mx-auto p-4 bg-white rounded-xl border border-gray-200 shadow-sm lg:ml-24 md:ml-24 mt-4 mr-2">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Cost Analysis</h2>

      {/* Tech Solutions Inc. */}
      <div className="flex items-center justify-between p-4 border-b border-gray-100">
        <div className="flex items-center gap-3">
          <div className="bg-blue-100 rounded-full w-10 h-10 flex items-center justify-center">
            <span className="text-blue-700 font-medium">T</span>
          </div>
          <span className="font-medium text-gray-800">Tech Solutions Inc.</span>
        </div>
        <div className="text-right">
          <span className="text-gray-700 font-medium">Highest price point</span>
        </div>
      </div>

      {/* DataTech Systems */}
      <div className="flex items-center justify-between p-4 border-b border-gray-100">
        <div className="flex items-center gap-3">
          <div className="bg-blue-100 rounded-full w-10 h-10 flex items-center justify-center">
            <span className="text-blue-700 font-medium">D</span>
          </div>
          <span className="font-medium text-gray-800">DataTech Systems</span>
        </div>
        <div className="text-right">
          <div className="font-semibold text-green-600">Save $2,000</div>
          <div className="text-gray-600 text-sm">
            16.0% lower than highest quote
          </div>
        </div>
      </div>

      {/* Global IT Supplies */}
      <div className="flex items-center justify-between p-4 border-b border-gray-100">
        <div className="flex items-center gap-3">
          <div className="bg-blue-100 rounded-full w-10 h-10 flex items-center justify-center">
            <span className="text-blue-700 font-medium">G</span>
          </div>
          <span className="font-medium text-gray-800">Global IT Supplies</span>
        </div>
        <div className="text-right">
          <div className="font-semibold text-green-600">Save $3,000</div>
          <div className="text-gray-600 text-sm">
            24.0% lower than highest quote
          </div>
        </div>
      </div>

      {/* TCO Analysis Note */}
      <div className="mt-4 p-4 bg-yellow-50 border border-yellow-100 rounded-lg">
        <div className="flex gap-2">
          <Info className="h-5 w-5 text-yellow-500 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-medium text-gray-800 mb-1">
              Total Cost of Ownership Analysis
            </p>
            <p className="text-gray-700">
              When considering hidden costs, support, and warranty coverage, the
              total cost of ownership may differ from the initial quote. Tech
              Solutions Inc. offers the best long-term value despite the higher
              initial cost.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CostAnalysis;
