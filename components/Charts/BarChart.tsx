/** @format */

import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
      labels: {
        boxWidth: 7,
        usePointStyle: true,
        pointStyle: "circle",
      },
    },
    title: {
      display: true,
      text: "Past 14 days record",
      color: "#000",
      font: {
        size: 18,
      },
    },

    elements: {
      bar: {
        barPercentage: 0.2,
        categoryPercentage: 1,
      },
    },
  },
  scales: {
    xAxis: {
      display: false,
    },
  },
};
const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      borderRadius: 30,
      data: [10, 12, 19, 20, 15],
      backgroundColor: "rgba(32, 214, 155, 1)",
      barThickness: 10,
    },
    {
      label: "Dataset 2",
      borderRadius: 20,
      data: [9, 15, 10, 5, 19],
      backgroundColor: "rgba(1, 98, 255, 1)",
      barThickness: 10,
    },
  ],
};

export default function BarGraph({ datasets }: { datasets: any }) {
  const newData = { ...data, ...datasets };

  return <Bar options={options} data={newData} />;
}
