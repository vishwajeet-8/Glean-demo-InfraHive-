import React from "react";
import { useNavigate } from "react-router-dom";
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

const data = [
  { name: "0", uv: 0, pv: 100, amt: 2400 },
  { name: "1", uv: 100, pv: 158, amt: 2210 },
  { name: "2", uv: 150, pv: 200, amt: 2290 },
  { name: "3", uv: 280, pv: 308, amt: 2000 },
  { name: "4", uv: 590, pv: 600, amt: 2181 },
  { name: "5", uv: 690, pv: 700, amt: 2500 },
  { name: "6", uv: 790, pv: 800, amt: 2100 },
  { name: "7", uv: 890, pv: 900, amt: 2100 },
  { name: "8", uv: 990, pv: 1000, amt: 2100 },
  { name: "9", uv: 1090, pv: 1100, amt: 2100 },
  { name: "10", uv: 1190, pv: 1200, amt: 2100 },
  { name: "11", uv: 1290, pv: 1390, amt: 2100 },
  { name: "12", uv: 1390, pv: 1200, amt: 2100 },
  { name: "13", uv: 1490, pv: 1200, amt: 2100 },
  { name: "14", uv: 1590, pv: 1200, amt: 2100 },
  { name: "15", uv: 1690, pv: 1200, amt: 2100 },
];

function Chart() {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/compare");
  }
  return (
    <>
      <ResponsiveContainer
        width="100%"
        height={300} // Specify height in percentage or px, depending on your layout needs
        style={{ backgroundColor: "#F8FAFC" }}
      >
        <LineChart
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <text
            x={150} // Center horizontally
            y={20} // Vertical position
            textAnchor="middle"
            dominantBaseline="middle"
            style={{ fontSize: "10px", fontWeight: "bold" }}
          >
            Current Month $157K
          </text>
          <text
            x={280} // Center horizontally
            y={20} // Vertical position
            textAnchor="middle"
            dominantBaseline="middle"
            style={{ fontSize: "10px", fontWeight: "bold" }}
          >
            Last Month $280K
          </text>
          <text
            x={390} // Center horizontally
            y={20} // Vertical position
            textAnchor="middle"
            dominantBaseline="middle"
            style={{
              fontSize: "10px",
              fontWeight: "bold",
            }}
          >
            Delta $-190K
          </text>

          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis tickFormatter={(value) => `$${value.toLocaleString()}`} />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="pv"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
      <button
        onClick={() => handleClick()}
        style={{
          position: "absolute",
          top: "43%", // Adjust positioning as needed
          right: "0%",
          transform: "translate(-50%, -50%)",
          padding: "5px 10px",
          border: "1px solid lightGray",
          borderRadius: "5px",
          backgroundColor: "#F8FAFC",
          cursor: "pointer",
          display: "flex",
          color: "Gray",
          gap: "5px",
        }}
      >
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-bar-chart-fill"
            viewBox="0 0 16 16"
          >
            <path d="M1 11a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zm5-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1z" />
          </svg>
        </span>
        Compare
      </button>
    </>
  );
}

export default Chart;
