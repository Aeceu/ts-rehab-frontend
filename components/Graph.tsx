"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
// import { jose_data as data } from "@/Data/TableData";

export function Graph({data}:{data:any[]}) {
  return (
    <div className="p-8 border-[1px] border-slate-300 shadow-md">
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis
          dataKey="name"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `$${value}`}
        />
        <Bar dataKey="total" fill="#adfa1d" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
    </div>
  )
}