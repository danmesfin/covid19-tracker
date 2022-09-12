/** @format */

import React from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartData,
  ScatterDataPoint,
  BubbleDataPoint,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const chartData = {
  labels: ["Deaths", "Recovered", "Case"],
  datasets: [
    {
      label: "Total",
      data: [13, 19, 3],
      backgroundColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
      ],
      borderWidth: 1,
      cutout: 90,
    },
  ],
};

export default function Piechart({
  dataset,
  label,
}: {
  dataset: any | Number;
  label: String;
}) {
  const data = {
    labels: [label],
    datasets: [
      {
        label: "Total",
        data: [dataset, 100 - dataset],
        backgroundColor: ["rgba(54, 162, 235, 1)", "rgba(1, 162, 1, 0.4)"],
        borderColor: ["rgba(54, 162, 235, 0.2)", "rgba(0, 0, 0, 0.2)"],
        borderWidth: 1,
        cutout: 90,
      },
    ],
  };

  return (
    <>
      <Doughnut data={data} />
    </>
  );
}
