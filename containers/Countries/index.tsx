/* eslint-disable @next/next/no-img-element */
import { Key, useEffect, useState } from "react";
import Link from "next/link";
import Spinner from '../../components/Spinner'

export default function Listed() {
  const [data, setData]: any = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://disease.sh/v3/covid-19/countries?sort=cases")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);
<<<<<<< HEAD
if (isLoading) return <div>Loading..</div>;

      
=======
if (isLoading) {return  (   <div className="overflow-x-auto relative mt-4 mx-2 ">
<div className="flex flex-col my-2 px-3 py-2 bg-red-100 shadow-sm">
  <span className=" text-red-600 text-md font-bold">
    Countries with most active cases
  </span>
  <span className="text-gray-400 text-xs font-semibold">
    click to see detailed information
  </span>
</div>
<table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
    <tr>
      <th scope="col" className="py-3 px-3">
        Country
      </th>
      <th scope="col" className="py-3 px-3">
        Cases
      </th>
      <th scope="col" className="py-3 px-3">
        Recovery
      </th>
      <th scope="col" className="py-3 px-3">
        Death
      </th>
    </tr>
  </thead>
    <tbody>
      <Spinner />
      </tbody>
      </table>
      </div>);}
>>>>>>> b46b78d3cd8d968f903b4ba71fa794c40eb6bb3b
  return (
    <div className="overflow-x-auto relative mt-4 mx-2 ">
      <div className="flex flex-col my-2 px-3 py-2 bg-red-100 shadow-sm">
        <span className=" text-red-600 text-md font-bold">
          Countries with most active cases
        </span>
        <span className="text-gray-400 text-xs font-semibold">
          click to see detailed information
        </span>
      </div>
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="py-3 px-3">
              Country
            </th>
            <th scope="col" className="py-3 px-3">
              Cases
            </th>
            <th scope="col" className="py-3 px-3">
              Recovery
            </th>
            <th scope="col" className="py-3 px-3">
              Death
            </th>
          </tr>
        </thead>
          <tbody>
            {data.slice(0, 14).map((item: Key | null | undefined | any) => (
              <tr
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                key={item.country}
              >
                <Link href={`/country/${item.countryInfo.iso2}`}>
                  <th className="cursor-pointer py-4 px-3 font-medium text-gray-900 whitespace-nowrap hover:bg-red-800 dark:text-white">
                    <img
                      alt="flag"
                      className="w-4"
                      src={item.countryInfo.flag}
                    />
                    {item.country}
                  </th>
                </Link>
                <td className="py-4 px-3">{item.cases}</td>
                <td className="py-4 px-3">{item.cases - item.deaths}</td>
                <td className="py-4 px-3">{item.deaths}</td>
              </tr>
            ))}
          </tbody>
      </table>
    </div>
  );
}
