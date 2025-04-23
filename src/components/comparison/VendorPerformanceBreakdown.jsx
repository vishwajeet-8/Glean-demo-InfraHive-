
import React from "react";
import { Star, CheckCircle } from "lucide-react";

const VendorPerformanceBreakdown = () => {
  return (
    <div className="mx-auto p-4 bg-white rounded-xl border border-gray-200 shadow-sm lg:ml-24 mt-4 mr-2">
      <h2 className="text-xl font-bold text-gray-800 mb-4">
        Vendor Performance Breakdown
      </h2>

      {/* Vendor Selection */}
      <div className="mb-6">
        <div className="w-full p-3 border border-gray-200 rounded-lg">
          <span className="font-medium">Tech Solutions Inc. (87%)</span>
        </div>
      </div>

      {/* Radar Chart */}
      <div className="flex justify-center mb-6">
        <div className="relative w-64 h-64 sm:w-80 sm:h-80">
          {/* Grid Lines */}
          <svg viewBox="0 0 200 200" className="w-full h-full">
            {/* Background Pentagon Grid - WIDER */}
            <polygon
              points="100,10 20,70 50,160 150,160 180,70"
              fill="none"
              stroke="#e5e7eb"
              strokeWidth="1"
            />
            <polygon
              points="100,30 40,78 62,148 138,148 160,78"
              fill="none"
              stroke="#e5e7eb"
              strokeWidth="1"
            />
            <polygon
              points="100,50 60,86 74,136 126,136 140,86"
              fill="none"
              stroke="#e5e7eb"
              strokeWidth="1"
            />
            <polygon
              points="100,70 80,94 86,124 114,124 120,94"
              fill="none"
              stroke="#e5e7eb"
              strokeWidth="1"
            />
            <polygon
              points="100,90 90,102 94,112 106,112 110,102"
              fill="none"
              stroke="#e5e7eb"
              strokeWidth="1"
            />

            {/* Axes */}
            <line
              x1="100"
              y1="10"
              x2="100"
              y2="90"
              stroke="#d1d5db"
              strokeWidth="1"
            />
            <line
              x1="100"
              y1="90"
              x2="180"
              y2="70"
              stroke="#d1d5db"
              strokeWidth="1"
            />
            <line
              x1="100"
              y1="90"
              x2="150"
              y2="160"
              stroke="#d1d5db"
              strokeWidth="1"
            />
            <line
              x1="100"
              y1="90"
              x2="50"
              y2="160"
              stroke="#d1d5db"
              strokeWidth="1"
            />
            <line
              x1="100"
              y1="90"
              x2="20"
              y2="70"
              stroke="#d1d5db"
              strokeWidth="1"
            />

            {/* Data Area - WIDER */}
            <polygon
              points="100,20 165,65 135,150 65,150 35,65"
              fill="#93c5fd"
              fillOpacity="0.6"
              stroke="#3b82f6"
              strokeWidth="2"
            />

            {/* Labels - REPOSITIONED */}
            <text
              x="100"
              y="10"
              textAnchor="middle"
              fill="#6b7280"
              fontSize="10"
            >
              Quality
            </text>
            <text
              x="150"
              y="70"
              textAnchor="start"
              fill="#6b7280"
              fontSize="10"
            >
              Delivery
            </text>
            <text
              x="150"
              y="170"
              textAnchor="middle"
              fill="#6b7280"
              fontSize="10"
            >
              Responsiveness
            </text>
            <text
              x="50"
              y="170"
              textAnchor="middle"
              fill="#6b7280"
              fontSize="10"
            >
              Cost
            </text>
            <text x="60" y="70" textAnchor="end" fill="#6b7280" fontSize="10">
              Compliance
            </text>
          </svg>
        </div>
      </div>

      {/* Overall Rating */}
      <div className="mb-3">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-medium text-gray-800">Overall Rating:</h3>
          <div className="flex">
            <Star className="w-5 h-5 text-yellow-400 fill-current" />
            <Star className="w-5 h-5 text-yellow-400 fill-current" />
            <Star className="w-5 h-5 text-yellow-400 fill-current" />
            <Star className="w-5 h-5 text-yellow-400 fill-current" />
            <Star className="w-5 h-5 text-gray-300" />
          </div>
        </div>
      </div>

      {/* Compliance Notice */}
      <div className="bg-blue-50 p-3 rounded-lg flex items-start gap-2">
        <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
        <p className="text-blue-700">
          This vendor has passed all compliance checks and verification
          procedures.
        </p>
      </div>
    </div>
  );
};

export default VendorPerformanceBreakdown;
