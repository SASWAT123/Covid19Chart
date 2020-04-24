import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

export default class Example extends PureComponent {
  render() {
    const { data } = this.props;
    const barData = [
      {
        name: data.state_name,
        deaths: data.deaths,
        recovered: data.recovered,
      },
    ];

    return (
      <BarChart
        width={1000}
        height={500}
        data={barData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="deaths" fill="#FF0000" />
        <Bar dataKey="recovered" fill="#82ca9d" />
      </BarChart>
    );
  }
}
