import "./FocusChart.css";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

function FocusChart({ sessions }) {
  const data = [
    { day: "Mon", focus:  20 },
    { day: "Tue", focus:  35 },
    { day: "Wed", focus:  15 },
    { day: "Thu", focus:  45 },
    { day: "Fri", focus:  25 },
    { day: "Sat", focus:  63 },
    { day: "Sun", focus:  51 },
  ];

  return (
    <div className="chart-container">
      <h2>📈 Weekly Focus Analytics</h2>

      <ResponsiveContainer
        width="100%"
        height={300}
      >
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="day" />

          <YAxis />

          <Tooltip />

          <Bar
            dataKey="focus"
            radius={[8, 8, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default FocusChart;