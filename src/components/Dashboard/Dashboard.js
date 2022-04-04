import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import  { PureComponent } from 'react';
import { BarChart, Bar, Cell,   Legend, ResponsiveContainer } from 'recharts';


const Dashboard = () => {
  const [data, setData] = useState([]);
  console.log(data);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="container my-5">

      <div className="row">
          <div className="col-md-6">
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
          >
            <Line type="monotone" dataKey="sell" stroke="#8884d8" />
            {/* <Line dataKey="revenue" /> */}
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
          </LineChart>
          </div>
          <div className="col-md-6">
          <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="investment" fill="#8884d8" />
          <Bar dataKey="revenue" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
          </div>
      </div>
   
    </div>
  );
};

export default Dashboard;
