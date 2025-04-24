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
    <div className="p-4 md:p-6 lg:p-8 mx-auto flex flex-col gap-6 lg:ml-20 md:ml-20">
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
              src="/logo2.png"
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
                      src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/168_Hubspot_logo_logos-512.png"
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
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwt02Pvocmj2bC5dPEWVClHVw843KI_a6yNw&s"
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
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBm1dfOBhz6s2fMONaonsRddC7G7FbwFugAw&s"
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
