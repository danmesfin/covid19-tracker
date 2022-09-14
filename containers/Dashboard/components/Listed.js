/** @format */

import { useEffect, useState } from "react";

export default function Listed() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://disease.sh/v3/covid-19/continents?sort=active")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (isLoading)
    return (
      <div className="flex animate-pulse w-full h-96 bg-gray-200 shadow-md rounded-md"></div>
    );
  if (!data) return <p>No profile data</p>;

  return (
    <div className="flex p-2 mx-auto">
      <div className="overflow-x-auto relative m-2 shadow-lg ">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-6">
                Continent
              </th>
              <th scope="col" className="py-3 px-6">
                Cases
              </th>
              <th scope="col" className="py-3 px-6">
                Recovery
              </th>
              <th scope="col" className="py-3 px-6">
                Death
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                key={item}
              >
                <th className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {item.continent}
                </th>
                <td className="py-4 px-6">{item.cases}</td>
                <td className="py-4 px-6">{item.cases - item.deaths}</td>
                <td className="py-4 px-6">{item.deaths}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
