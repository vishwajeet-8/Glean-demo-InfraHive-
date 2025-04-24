import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useNavigate } from "react-router-dom";

const AWSBilling = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/compare");
  };
  const data = [
    { month: "JUN", value: 0 },
    { month: "JUL", value: 35.5 },
    { month: "AUG", value: 0 },
    { month: "SEP", value: 9.2 },
    { month: "OCT", value: 11.0 },
    { month: "NOV", value: 9.5 },
    { month: "DEC", value: 9.6 },
    { month: "JAN", value: 11.0 },
    { month: "FEB", value: 8.1 },
    { month: "MAR", value: 10.0 },
    { month: "APR", value: 9.2 },
    { month: "MAY", value: 9.2 },
  ];

  return (
    <div className="p-5 max-w-6xl mx-auto w-full lg:ml-20 md:ml-20">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 space-y-4 sm:space-y-0">
        <div className="flex gap-4 items-center">
          <div className="w-10 h-10 bg-gray-400 rounded">
            <img src="logo2.png" alt="" className="h-10 w-10" />
          </div>
          <div>
            <h2 className="text-xl font-medium m-0">$9,175.08</h2>
            <span className="text-gray-600">$0.00 Due</span>
          </div>
        </div>
        <div className="flex gap-2">
          <span className="px-3 py-1 bg-green-100 text-green-700 rounded text-sm">
            APPROVED
          </span>
          <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded text-sm">
            PAID
          </span>
        </div>
      </div>

      {/* Navigation */}
      <div className="border-b border-gray-300 mb-6 overflow-x-auto whitespace-nowrap">
        {["Summary", "Line Items", "Accounting", "History", "Comments"].map(
          (item, index) => (
            <button
              key={item}
              className={`px-5 py-2 border-0 bg-transparent ${
                index === 0
                  ? "text-black border-b-2 border-black"
                  : "text-gray-600"
              } -mb-px cursor-pointer`}
            >
              {item}
            </button>
          )
        )}
      </div>

      {/* Invoice Details */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
        {[
          { label: "INVOICE #", value: "1033926849" },
          { label: "INVOICE DATE", value: "May 3, 2022" },
          { label: "DUE DATE", value: "May 3, 2022" },
          { label: "BILLING PERIOD", value: "Apr 1 - 30, 2022" },
        ].map((item, index) => (
          <div key={index}>
            <div className="text-gray-600 text-xs">{item.label}</div>
            <div>{item.value}</div>
          </div>
        ))}
      </div>

      {/* Chart Section */}
      <div>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 space-y-2 sm:space-y-0">
          <h3 className="text-lg font-medium m-0">Vendor History</h3>
          <button
            className="px-4 py-1 border border-gray-300 rounded bg-white cursor-pointer"
            onClick={handleClick}
          >
            Compare
          </button>
        </div>

        <div className="bg-white p-4 sm:p-5 rounded-lg shadow-sm">
          <div className="w-full h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="month" />
                <YAxis tickFormatter={(value) => `$${value}K`} />
                <Tooltip />
                <Bar dataKey="value" fill="gray" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Gleans Section */}
      <div className="mt-8">
        <h3 className="text-lg font-medium">Gleans</h3>
        <div className="bg-gray-50 p-5 rounded-lg">
          <h4 className="m-0 mb-2 font-medium">Paid Bill</h4>
          <p className="m-0 text-gray-600">
            This bill has already been paid. No further payment activity is
            required.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AWSBilling;
