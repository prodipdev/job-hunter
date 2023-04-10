import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { StarIcon } from "@heroicons/react/24/solid";
const data = [
  {
    name: "A-1",
    Marks: 60,
  },
  {
    name: "A-2",
    Marks: 54,
  },
  {
    name: "A-3",
    Marks: 47,
  },
  {
    name: "A-4",
    Marks: 59,
  },
  {
    name: "A-5",
    Marks: 50,
  },
  {
    name: "A-6",
    Marks: 57,
  },
  {
    name: "A-7",
    Marks: 49,
  },
  {
    name: "A-8",
    Marks: 60,
  },
];

const Statistics = () => {
  let totalMarks = 0;
  for (const assignment of data) {
    totalMarks += assignment.Marks;
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold text-center bg-primary pb-16 mb-10 pt-10">
        Assignment Analytics
      </h2>

      <div className="flex justify-center items-center gap-2 mb-5">
        <span className="bg-amber-100 p-1 rounded-full">
          <StarIcon className=" h-7 w-7 text-amber-500" />
        </span>
        <div className="grid">
          <span className="text-3xl font-bold">
            {(totalMarks / data.length).toFixed(2)}
          </span>
          <span className="text-gray-500">Avg Assignment Mark</span>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={400}>
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Marks"
            stroke="#8884d9"
            fill="#8884d8"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Statistics;
