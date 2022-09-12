/** @format */

import React, { useEffect, useState } from "react";
import LineChart from "../../../components/Charts/LineChart";

function Alldays() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`https://disease.sh/v3/covid-19/historical/all?lastdays=365`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);
  if (isLoading)
    return (
      <div className="flex animate-pulse w-full h-full m-2 bg-gray-200 rounded-md"></div>
    );
  if (!data)
    return (
      <div className="flex animate-pulse w-full h-full m-2 bg-gray-200 rounded-md">
        No profile data to show
      </div>
    );
  const labels = Object.keys(data.cases);
  const cases = Object.values(data.cases);
  const deaths = Object.values(data.deaths);

  const chartdata = {
    labels,
    datasets: [
      {
        label: "cases",
        data: cases,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Deaths",
        data: deaths,
        borderColor: "rgb(255, 255, 255)",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
      },
    ],
  };

  return <LineChart datasets={chartdata} />;
}
export default Alldays;
