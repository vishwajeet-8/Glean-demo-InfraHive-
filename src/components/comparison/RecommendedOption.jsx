import { Award } from "lucide-react";
import React from "react";

const RecommendedOption = () => {
  return (
    <div className="p-4 bg-blue-50 rounded-xl border border-blue-100 mx-auto lg:ml-24 md:ml-24 mt-4 mr-2">
      {/* Header with badge */}
      <div className="flex items-center gap-2 mb-4">
        <Award className="text-blue-600 h-5 w-5" />
        <span className="font-semibold text-gray-800 text-lg">
          Recommended Option
        </span>
      </div>

      {/* Company Info */}
      <div className="flex items-center gap-3 mb-3">
        <div className="bg-blue-100 rounded-full w-10 h-10 flex items-center justify-center">
          <span className="text-blue-700 font-medium">T</span>
        </div>
        <div>
          <h3 className="font-bold text-gray-900">Tech Solutions Inc.</h3>
          <p className="text-blue-600 text-sm">
            Highest Performance Score: 87%
          </p>
        </div>
      </div>

      {/* Details card */}
      <div className="bg-white rounded-lg p-4 mb-4 shadow-sm">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          <div>
            <p className="text-gray-600">Price:</p>
            <p className="font-semibold text-right sm:text-left">$12,500</p>
          </div>
          <div>
            <p className="text-gray-600">Delivery Time:</p>
            <p className="font-semibold text-right sm:text-left">15 days</p>
          </div>
          <div>
            <p className="text-gray-600">Warranty:</p>
            <p className="font-semibold text-right sm:text-left">36 months</p>
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-700 mb-3">
        This option offers the best overall value when considering quality,
        reliability, warranty coverage, and vendor performance history.
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs">
          Premium quality
        </span>
        <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs">
          Extended warranty
        </span>
        <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs">
          24/7 support
        </span>
      </div>
    </div>
  );
};

export default RecommendedOption;
