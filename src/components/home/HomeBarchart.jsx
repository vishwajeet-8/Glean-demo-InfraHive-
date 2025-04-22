import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from "recharts";
const data = [
  {
    name: "$86.1k",
    uv: 4000,
    pv: 7400,
    amt: 2400,
  },
  {
    name: "$19.k",
    uv: 3000,
    pv: 8098,
    amt: 2210,
  },
  {
    name: "$29.0k",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "$10.8k",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "$98.78k",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "$71.0k",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "$65.1k",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

function HomeBarchart() {
  return (
    <BarChart
      width={400}
      height={500}
      data={data}
      layout="vertical"
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
      <XAxis type="number" />
      <YAxis type="category" dataKey="name" />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
      <Legend />
      <Bar
        className="bar"
        dataKey="pv"
        fill="#E2E1EF"
        barSize={50}
        radius={[0, 5, 5, 0]}
      />
    </BarChart>
  );
}

export default HomeBarchart;
