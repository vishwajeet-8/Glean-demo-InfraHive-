import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import {
  ChevronDown,
  ArrowDownRight,
  ArrowUpRight,
  Filter,
  Search,
} from "lucide-react";
import HighchartComponent from "./HighchartComponent";

// Mock data for the chart
const data = [
  { name: "Jul", period1: 400, period2: 340 },
  { name: "Aug", period1: 300, period2: 250 },
  { name: "Sep", period1: 200, period2: 220 },
  { name: "Oct", period1: 278, period2: 290 },
  { name: "Nov", period1: 189, period2: 140 },
  { name: "Dec", period1: 239, period2: 220 },
];

// Simple chart component to replace HighchartComponent
const SimpleChart = () => {
  return (
    <div className="w-full h-64">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="period1"
            stroke="#8884d8"
            name="Jul 2022"
          />
          <Line
            type="monotone"
            dataKey="period2"
            stroke="#82ca9d"
            name="Aug 2022"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

function Compare() {
  return (
    <div className="p-4 md:p-6 lg:p-8 max-w-7xl mx-auto flex flex-col gap-6">
      <h1 className="text-2xl md:text-3xl font-bold text-center lg:text-left">
        Compare
      </h1>

      {/* Analyze Section */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 w-full">
        <p className="font-medium text-gray-700">Analyze</p>

        {/* Glean dropdown */}
        <div className="w-full md:w-2/5 bg-gray-100 rounded-lg p-2 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img
              src="data:image/jpeg;base64,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"
              alt="Glean logo"
              className="h-8 w-8 rounded-full"
            />
            <p className="font-medium">Glean</p>
          </div>
          <ChevronDown className="text-gray-500" size={16} />
        </div>

        {/* Date period selection */}
        <div className="w-full md:w-1/2 flex flex-col md:flex-row items-center gap-3">
          <p className="text-gray-600 text-sm">Time Period</p>

          <div className="w-full flex flex-col md:flex-row items-center gap-2">
            <div className="w-full bg-gray-100 rounded-lg p-2 px-4 flex justify-between items-center">
              <p>Jul 2022</p>
              <ChevronDown className="text-gray-500" size={16} />
            </div>

            <p className="text-gray-600 mx-2">vs</p>

            <div className="w-full bg-gray-100 rounded-lg p-2 px-4 flex justify-between items-center">
              <p>Aug 2022</p>
              <ChevronDown className="text-gray-500" size={16} />
            </div>
          </div>
        </div>
      </div>

      {/* Charts and Stats */}
      <div className="flex flex-col lg:flex-row gap-4 w-full">
        {/* Chart section */}
        <div className="w-full lg:w-1/2 shadow-md rounded-lg p-4 bg-white">
          <div className="sideBar1">
            <HighchartComponent />
          </div>
        </div>

        {/* Stats section */}
        <div className="w-full lg:w-1/2 shadow-md rounded-lg p-6 flex flex-col gap-4 bg-white">
          <p className="text-lg text-gray-700">
            Total spend decreased{" "}
            <span className="text-emerald-600 font-bold">
              -$58,717 -17% <ArrowDownRight className="inline" size={16} />
            </span>
          </p>

          <h4 className="text-lg font-semibold text-gray-800 italic mt-2">
            Vendor breakdown
          </h4>

          <ul className="space-y-2 list-disc pl-5">
            <li className="text-gray-700">
              10 vendors increased, for{" "}
              <span className="text-red-600 font-bold">
                $13,389 <ArrowUpRight className="inline" size={16} />
              </span>
            </li>
            <li className="text-gray-700">
              13 vendors decreased, for{" "}
              <span className="text-emerald-600 font-bold">
                $88,389 <ArrowDownRight className="inline" size={16} />
              </span>
            </li>
            <li className="text-gray-700">
              2 new vendors for{" "}
              <span className="text-red-600 font-bold">
                $11,389 <ArrowUpRight className="inline" size={16} />
              </span>
            </li>
          </ul>

          <h4 className="text-lg font-semibold text-gray-800 italic mt-2">
            Largest driver of variance
          </h4>

          <ul className="space-y-2 list-disc pl-5">
            <li className="text-gray-700">
              <span className="text-emerald-600 font-bold">
                $49,398 <ArrowDownRight className="inline" size={16} />
              </span>{" "}
              decrease in Datadog
            </li>
          </ul>
        </div>
      </div>

      {/* Vendor List Section */}
      <div className="w-full mt-4">
        {/* Filter bar */}
        <div className="flex flex-col sm:flex-row justify-between gap-3 p-4 shadow-md rounded-lg bg-white mb-4">
          <button className="flex items-center gap-2 text-gray-700 border border-gray-300 rounded-lg px-4 py-2 bg-gray-50">
            <span className="inline-block w-4 h-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2z" />
              </svg>
            </span>
            <span>Filter</span>
          </button>

          <button className="flex items-center gap-2 text-gray-700 border border-gray-300 rounded-lg px-4 py-2 bg-gray-50">
            <Search size={16} />
            <span>Search Vendors</span>
          </button>
        </div>

        {/* Vendor table */}
        <div className="w-full overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr className="border-b border-gray-300">
                <th className="text-left p-3 font-semibold text-gray-700">
                  Vendor
                </th>
                <th className="text-left p-3 font-semibold text-gray-700">
                  JUL 2022
                </th>
                <th className="text-left p-3 font-semibold text-gray-700">
                  AUG 2022
                </th>
                <th className="text-left p-3 font-semibold text-gray-700">
                  Delta ($)
                </th>
                <th className="text-left p-3 font-semibold text-gray-700">
                  Delta (%)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="p-3">
                  <div className="flex items-center gap-2">
                    <img
                      src="https://s3-symbol-logo.tradingview.com/main-street-capital-corporation--600.png"
                      alt="Main Street"
                      className="h-5 w-5"
                    />
                    <span>Main Street</span>
                  </div>
                </td>
                <td className="p-3">..</td>
                <td className="p-3">$12,995</td>
                <td className="p-3 text-red-600 font-bold">
                  +$12,995 <ArrowUpRight className="inline" size={14} />
                </td>
                <td className="p-3 text-red-600 font-bold">
                  N/A <ArrowUpRight className="inline" size={14} />
                </td>
              </tr>

              <tr className="border-b border-gray-200">
                <td className="p-3">
                  <div className="flex items-center gap-2">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/150px-Google_%22G%22_logo.svg.png"
                      alt="Google"
                      className="h-5 w-5"
                    />
                    <span>Google</span>
                  </div>
                </td>
                <td className="p-3">..</td>
                <td className="p-3">$1,995</td>
                <td className="p-3 text-red-600 font-bold">
                  +$995 <ArrowUpRight className="inline" size={14} />
                </td>
                <td className="p-3 text-red-600 font-bold">
                  N/A <ArrowUpRight className="inline" size={14} />
                </td>
              </tr>

              <tr className="border-b border-gray-200">
                <td className="p-3">
                  <div className="flex items-center gap-2">
                    <img
                      src="https://w7.pngwing.com/pngs/430/271/png-transparent-hubspot-inc-inbound-marketing-business-sales-marketing-text-logo-number.png"
                      alt="HubSpot"
                      className="h-5 w-5"
                    />
                    <span>HubSpot</span>
                  </div>
                </td>
                <td className="p-3">..</td>
                <td className="p-3">$995</td>
                <td className="p-3 text-red-600 font-bold">
                  +$20,995 <ArrowUpRight className="inline" size={14} />
                </td>
                <td className="p-3 text-red-600 font-bold">
                  +$2,995 <ArrowUpRight className="inline" size={14} />
                </td>
              </tr>

              <tr className="border-b border-gray-200">
                <td className="p-3">
                  <div className="flex items-center gap-2">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVu_punmVpXPehlmF-zb9LO30EZQRtHpK7KA&s"
                      alt="Microsoft"
                      className="h-5 w-5"
                    />
                    <span>Microsoft</span>
                  </div>
                </td>
                <td className="p-3">..</td>
                <td className="p-3">$995</td>
                <td className="p-3 text-red-600 font-bold">
                  +$20,995 <ArrowUpRight className="inline" size={14} />
                </td>
                <td className="p-3 text-red-600 font-bold">
                  +$2,995 <ArrowUpRight className="inline" size={14} />
                </td>
              </tr>

              <tr className="border-b border-gray-200">
                <td className="p-3">
                  <div className="flex items-center gap-2">
                    <img
                      src="/api/placeholder/20/20"
                      alt="Oracle"
                      className="h-5 w-5"
                    />
                    <span>Oracle</span>
                  </div>
                </td>
                <td className="p-3">$498</td>
                <td className="p-3">$2,995</td>
                <td className="p-3 text-red-600 font-bold">
                  +$20,995 <ArrowUpRight className="inline" size={14} />
                </td>
                <td className="p-3 text-red-600 font-bold">
                  +$2,995 <ArrowUpRight className="inline" size={14} />
                </td>
              </tr>

              <tr className="border-b border-gray-200">
                <td className="p-3">
                  <div className="flex items-center gap-2">
                    <img
                      src="/api/placeholder/20/20"
                      alt="IBM"
                      className="h-5 w-5"
                    />
                    <span>IBM</span>
                  </div>
                </td>
                <td className="p-3">$982</td>
                <td className="p-3">$7,895</td>
                <td className="p-3 text-red-600 font-bold">
                  +$20,995 <ArrowUpRight className="inline" size={14} />
                </td>
                <td className="p-3 text-red-600 font-bold">
                  +$2,995 <ArrowUpRight className="inline" size={14} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Compare;
