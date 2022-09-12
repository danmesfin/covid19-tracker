/** @format */

import { useEffect, useState } from "react";
import BarGraph from "../../components/Charts/BarChart";
import Spinner from "../../components/Spinner";
// a 14 day history
export default function History({ id }) {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`https://disease.sh/v3/covid-19/historical/${id}?lastdays=14`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, [id]);

  if (isLoading) return <Spinner />;
  if (!data) return <p>No profile data</p>;
  const labels = Object.keys(data.timeline.cases);
  const cases = Object.values(data.timeline.cases);
  const deaths = Object.values(data.timeline.deaths);
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
