/** @format */

import { useEffect, useState } from "react";
import BarGraph from "../../../components/Charts/BarChart";
// a 14 day history
export default function History({ id }) {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`https://disease.sh/v3/covid-19/historical/all?lastdays=14`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, [id]);

  if (isLoading)
    return (
      <div className="flex w-full animate-pulse px-10 bg-gray-300 shadow-md rounded-md"></div>
    );
  if (!data) return <p>No profile data</p>;
  const labels = Object.keys(data.cases);
  const cases = Object.values(data.cases);
  const deaths = Object.values(data.deaths);
  const recovered = cases.map((item, index) => item - deaths[index]);
  const chartsData = {
    labels: labels,
    datasets: [
      {
        label: "cases",
        borderRadius: 30,
        data: cases,
        backgroundColor: "rgba(32, 214, 155, 1)",
        barThickness: 10,
      },
      {
        label: "recoverd ",
        borderRadius: 20,
        data: recovered,
        backgroundColor: "rgba(1, 98, 255, 1)",
        barThickness: 10,
      },
    ],
  };

  return <BarGraph datasets={chartsData} />;
}
