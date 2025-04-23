import { DollarSign, AlertCircle } from "lucide-react";
import React from "react";

const BestValueOption = () => {
  return (
    <div className="p-4 bg-green-50 rounded-xl border border-green-100 mx-auto lg:ml-24 mt-4 mr-2">
      {/* Header with dollar sign */}
      <div className="flex items-center gap-2 mb-4">
        <DollarSign className="text-green-600 h-5 w-5" />
        <span className="font-semibold text-gray-800 text-lg">
          Best Value Option
        </span>
      </div>

      {/* Company Info */}
      <div className="flex items-center gap-3 mb-3">
        <div className="bg-green-100 rounded-full w-10 h-10 flex items-center justify-center">
          <span className="text-green-700 font-medium">D</span>
        </div>
        <div>
          <h3 className="font-bold text-gray-900">DataTech Systems</h3>
          <p className="text-green-600 text-sm">
            Best Price-to-Performance Ratio
          </p>
        </div>
      </div>

      {/* Details card */}
      <div className="bg-white rounded-lg p-4 mb-4 shadow-sm">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          <div>
            <p className="text-gray-600">Price:</p>
            <p className="font-semibold text-right sm:text-left">$10,500</p>
          </div>
          <div>
            <p className="text-gray-600">Potential Savings:</p>
            <p className="font-semibold text-green-600 text-right sm:text-left">
              $2,000
            </p>
          </div>
          <div>
            <p className="text-gray-600">Performance Score:</p>
            <p className="font-semibold text-right sm:text-left">79%</p>
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-700 mb-3">
        This option provides the best balance between cost savings and
        acceptable quality standards for your requirements.
      </p>

      {/* Note with warning icon */}
      <div className="flex items-center gap-2 bg-yellow-50 border border-yellow-100 rounded-lg p-3 text-sm text-yellow-700">
        <AlertCircle className="h-4 w-4 text-yellow-500" />
        <span>Note: Support renewal fee after 12 months</span>
      </div>
    </div>
  );
};

export default BestValueOption;
