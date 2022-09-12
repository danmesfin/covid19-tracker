/**
 * /* eslint-disable @next/next/no-img-element
 *
 * @format
 */

import { Dispatch, SetStateAction, useEffect, useState } from "react";
import PaginatedItems from "../../components/Pagination";

export default function Profile() {
  const [data, setData]: [any | null, Dispatch<SetStateAction<null>>] =
    useState(null);
  const [isLoading, setLoading] = useState(false);
  
  const API_KEY = process.env.NEWSAPI_KEY;
  const API_URL = `https://newsapi.org/v2/everything?q=coronavirus&covid&apiKey=${API_KEY}`
  
  useEffect(() => {
    setLoading(true);
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, [API_URL]);

  if (isLoading)
    return (
      <div className="container">
        <div className="text-lg md:text-2xl font-bold text-red-600 my-3 dark:text-white">
          <span>| Recent articles on covid-19</span>
        </div>
        <div className="animate-pulse bg-white mt-2 cursor-pointer flex flex-wrap md:flex-nowrap rounded-md border border-red-100 border-opacity-30">
          {" "}
          <div className=" bg-gray-200 m-1 w-48 h-36 md:w-48 md:h-24 my-auto border rounded-md"></div>
          <div className="flex flex-wrap">
            <div className=" mx-2 flex flex-col font-semibold py-2">
              <span className="py-1 m-1 w-48 md:w-96 h-6 rounded-md bg-gray-200 border"></span>
              <span className="py-1 m-1 w-48 md:w-96 h-6 rounded-md bg-gray-200 border"></span>
              <span className="w-24 md:w-48 h-6 m-1 rounded-md bg-gray-200 border">
                {}
              </span>
            </div>
          </div>
        </div>
        <div className="animate-pulse bg-white mt-2 cursor-pointer flex flex-wrap md:flex-nowrap rounded-md border border-red-600 border-opacity-30">
          {" "}
          <div className=" bg-gray-200 m-1 w-full h-36 md:w-48 md:h-24 my-auto border rounded-md"></div>
          <div className="flex flex-wrap">
            <div className=" mx-2 flex flex-col font-semibold py-2">
              <span className="py-1 m-1 w-48 md:w-96 h-6 rounded-md bg-gray-200 border"></span>
              <span className="py-1 m-1 w-48 md:w-96 h-6 rounded-md bg-gray-200 border"></span>
              <span className="w-24 md:w-48 h-6 m-1 rounded-md bg-gray-200 border">
                {}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  if (!data) return <p>No profile data</p>;

  const articles = data?.articles;
  return (
    <div className="flex flex-col w-full md:px-4">
      <div className="flex flex-col py-2">
        <span className="text-lg md:text-2xl font-bold text-red-600 my-3 dark:text-white">
          | Recent articles related to covid-19
        </span>
        <span className="text-sm text-blue-500">#covid19 #coronaVirus</span>
      </div>
      <PaginatedItems items={articles} itemsPerPage={5} />
    </div>
  );
}
