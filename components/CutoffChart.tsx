"use client";

import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

export function CutoffChart({ data, keys }: { data: Array<Record<string, number>>; keys: string[] }) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" />
        <YAxis />
        <Tooltip />
        {keys.map((key, index) => (
          <Line key={key} type="monotone" dataKey={key} stroke={["#003087", "#0E7AFE", "#FF7A59", "#18A058"][index]} strokeWidth={3} />
        ))}
      </LineChart>
    </ResponsiveContainer>
  );
}
