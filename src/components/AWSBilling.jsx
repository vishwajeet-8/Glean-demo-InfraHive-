import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

const AWSBilling = () => {
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
    <div
      style={{
        padding: "20px",
        maxWidth: "1000px",
        margin: "0 auto",
        marginLeft: "230px",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
          <div
            style={{
              width: "40px",
              height: "40px",
              backgroundColor: "#ff9900",
              borderRadius: "4px",
            }}
          ></div>
          <div>
            <h2 style={{ margin: 0 }}>$9,175.08</h2>
            <span style={{ color: "#666" }}>$0.00 Due</span>
          </div>
        </div>
        <div style={{ display: "flex", gap: "10px" }}>
          <span
            style={{
              padding: "5px 10px",
              backgroundColor: "#e6ffe6",
              color: "#006600",
              borderRadius: "4px",
              fontSize: "14px",
            }}
          >
            APPROVED
          </span>
          <span
            style={{
              padding: "5px 10px",
              backgroundColor: "#f0f0f0",
              color: "#666",
              borderRadius: "4px",
              fontSize: "14px",
            }}
          >
            PAID
          </span>
        </div>
      </div>

      {/* Navigation */}
      <div
        style={{
          borderBottom: "1px solid #ddd",
          marginBottom: "20px",
        }}
      >
        {["Summary", "Line Items", "Accounting", "History", "Comments"].map(
          (item, index) => (
            <button
              key={item}
              style={{
                padding: "10px 20px",
                border: "none",
                background: "none",
                color: index === 0 ? "#000" : "#666",
                borderBottom: index === 0 ? "2px solid #000" : "none",
                marginBottom: "-1px",
                cursor: "pointer",
              }}
            >
              {item}
            </button>
          )
        )}
      </div>

      {/* Invoice Details */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "20px",
          marginBottom: "30px",
        }}
      >
        {[
          { label: "INVOICE #", value: "1033926849" },
          { label: "INVOICE DATE", value: "May 3, 2022" },
          { label: "DUE DATE", value: "May 3, 2022" },
          { label: "BILLING PERIOD", value: "Apr 1 - 30, 2022" },
        ].map((item, index) => (
          <div key={index}>
            <div style={{ color: "#666", fontSize: "12px" }}>{item.label}</div>
            <div>{item.value}</div>
          </div>
        ))}
      </div>

      {/* Chart Section */}
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "15px",
          }}
        >
          <h3 style={{ margin: 0 }}>Vendor History</h3>
          <button
            style={{
              padding: "5px 15px",
              border: "1px solid #ddd",
              borderRadius: "4px",
              background: "white",
              cursor: "pointer",
            }}
          >
            Compare
          </button>
        </div>

        <div
          style={{
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "8px",
          }}
        >
          <BarChart width={900} height={300} data={data}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="month" />
            <YAxis tickFormatter={(value) => `$${value}K`} />
            <Tooltip />
            <Bar dataKey="value" fill="gray" radius={[4, 4, 0, 0]} />
          </BarChart>
        </div>
      </div>

      {/* Gleans Section */}
      <div style={{ marginTop: "30px" }}>
        <h3>Gleans</h3>
        <div
          style={{
            backgroundColor: "#f9fafb",
            padding: "20px",
            borderRadius: "8px",
          }}
        >
          <h4 style={{ margin: "0 0 10px 0" }}>Paid Bill</h4>
          <p style={{ margin: 0, color: "#666" }}>
            This bill has already been paid. No further payment activity is
            required.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AWSBilling;
