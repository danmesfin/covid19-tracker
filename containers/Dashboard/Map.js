/** @format */

import React, { useEffect, useState } from "react";
import Mymap from "../../components/Map/index";

function Map() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://disease.sh/v3/covid-19/countries")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (isLoading)
    return (
      <div className="flex animate-pulse bg-white w-full h-96 m-2 border shadow-sm dark:bg-gray-700 rounded-md">
        <div className="bg-gray-200 h-96 m-2 border dark:bg-gray-700 rounded-md"></div>
      </div>
    );
  if (!data) return <p>No profile data</p>;

  return (
    <div className="z-0">
      <Mymap data={data} />
    </div>
  );
}

export default Map;
