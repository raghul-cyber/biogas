"use client";

import { useState, useEffect } from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { year: "2019", co2_offset: 120 },
  { year: "2020", co2_offset: 210 },
  { year: "2021", co2_offset: 350 },
  { year: "2022", co2_offset: 580 },
  { year: "2023", co2_offset: 890 },
  { year: "2024", co2_offset: 1250 },
];

export default function ImpactChart() {
  const [mounted, setMounted] = useState(false);

  // Prevent hydration errors by only rendering the chart after mounting
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-full h-[400px] bg-forest-900 animate-pulse rounded-xl flex items-center justify-center border border-forest-800">
        <span className="text-forest-400">Loading chart...</span>
      </div>
    );
  }

  return (
    <div className="w-full h-[400px] bg-charcoal p-4 rounded-xl border border-forest-800 shadow-lg">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorOffset" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#f59e0b" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#1f2937" vertical={false} />
          <XAxis 
            dataKey="year" 
            stroke="#9ca3af" 
            tick={{ fill: '#9ca3af' }}
            tickMargin={10}
            axisLine={false}
            tickLine={false}
          />
          <YAxis 
            stroke="#9ca3af" 
            tick={{ fill: '#9ca3af' }}
            tickFormatter={(value) => `${value}k`}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: '#0f172a', 
              borderColor: '#1e293b',
              color: '#f8fafc',
              borderRadius: '8px'
            }}
            itemStyle={{ color: '#f59e0b' }}
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            formatter={(value: any) => [`${value},000 Tons`, 'CO2 Offset']}
            labelStyle={{ color: '#94a3b8', marginBottom: '4px' }}
          />
          <Area 
            type="monotone" 
            dataKey="co2_offset" 
            stroke="#f59e0b" 
            strokeWidth={3}
            fillOpacity={1} 
            fill="url(#colorOffset)" 
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
