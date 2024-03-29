import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  ResponsiveContainer,
  CartesianGrid,
  Tooltip,
} from "recharts";
import "./chart.scss";


const Chart = ({ aspect,data, title }) => {
  return (
    <div className="chart">
    <div className="title">{title}</div>

      <AreaChart
        width={'90%'}
        height={'90%'}
        data={data}
        margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
        }}
        >
        <defs>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#589FFF" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#589FFF" stopOpacity={0} />
            </linearGradient>
          </defs>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="ren_dt" />
        <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="tot_mod_rtr" stroke="#589FFF" fill="url(#total)" fillOpacity={1} />
      </AreaChart>
    </div>
  );
};

export default Chart;
