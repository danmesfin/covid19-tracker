/** @format */

import { useEffect, useState } from "react";
import { FacebookShareButton, TwitterShareButton } from "react-share";
import { FacebookIcon, TwitterIcon } from "react-share";
import Spinner from "../../components/Spinner";
import Piechart from "./components/Charts";
import BarGraph from "../../containers/Dashboard/components/BarGraph";
import Countries from "../Countries";
import Alldays from "./components/Alldays";
import News from "../News/index";

export default function Index() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch("https://disease.sh/v3/covid-19/all")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  const chartsData = {
    labels: ["Deaths", "Recovered", "Case"],
    datasets: [
      {
        label: "covid-19 distribution",
        data: [data?.deaths, data?.recovered, data?.cases],
        backgroundColor: [
          "rgba(0, 0, 0, 0.5)",
          "rgba(1, 180, 65, 0.5)",
          "rgba(255, 99, 132, 0.5)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(255, 0, 0, 0.5)",
        ],
        borderWidth: 0.5,
        cutout: 80,
      },
    ],
  };

  return (
    <div className="grid grid-cols-1  md:grid-cols-6 md:gap-4 justify-center rounded-sm shadow-sm">
      <div className="col-span-4 md:p-2 mt-3">
        <div className="flex flex-col justify-center py-2 text-gray-700 rounded-md border-l-2 border-black  ">
          <div className="flex">
            <p className="mx-2 text-sm p-2 font-semibold ">
              Coronavirus disease (COVID-19) is an infectious disease caused by
              the SARS-CoV-2 virus. Most people who fall sick with COVID-19 will
              experience mild to moderate symptoms and recover without special
              treatment. However, some will become seriously ill and require
              medical attention.
            </p>
          </div>
          <div className="flex justify-between px-2 md:pt-2 text-md font-medium">
            <span className="mx-2 md:text-lg text-red-600">Worl-wide data</span>
            <div className="share-buttons flex">
              <FacebookShareButton
                url={"https://coronatracking.com"}
                quote={"covid-19"}
                hashtag={"#Covid19Today"}
                description={"aiueo"}
                className="Demo__some-network__share-button mx-1"
              >
                <FacebookIcon size={32} round />
              </FacebookShareButton>
              <br />
              <TwitterShareButton
                title={"twitter"}
                url={"https://coronatracking.cmo"}
                hashtags={["covid", "coronaVirus"]}
              >
                <TwitterIcon size={32} round />
              </TwitterShareButton>
            </div>
          </div>
          <div className="flex pt-1 md:p-1 flex-wrap md:flex-nowrap uppercase font-sanserif">
            <div className="hover:bg-blue-50 md:w-48 m-2 bg-red-100 rounded-md shadow-md">
              <div className="text-sm font-bold md:text-md p-2 bg-red-400 rounded-md">
                <span className="mx-1 text-red-900">Total cases</span>
              </div>
              <div className="text-lg md:text-2xl bold py-1 md:py-3 text-left">
                <span className="mx-1 text-red-500">
                  {isLoading ? <Spinner /> : data.cases}
                </span>
              </div>
            </div>
            <div className="hover:bg-blue-50 md:w-48 bg-green-100 m-2 rounded-md shadow-md">
              <div className="text-sm font-bold md:text-md p-2 bg-green-300 rounded-md">
                <span className="mx-1 text-green-500">Recovered</span>
              </div>
              <div className="text-lg md:text-2xl bold py-1 md:py-3 text-left">
                <span className="mx-1 text-green-500">
                  {isLoading ? <Spinner /> : data.recovered}
                </span>
              </div>
            </div>
            <div className="flex-col hover:bg-blue-50 md:w-48 bg-gray-100 m-2 rounded-md shadow-md">
              <div className="text-sm font-bold md:text-md p-2 bg-gray-400 rounded-md">
                <span className="mx-1 text-gray-800">Death</span>
              </div>
              <div className="text-lg md:text-2xl bold py-1 md:py-3 text-left">
                <span className="mx-1 text-gray-500">
                  {isLoading ? <Spinner /> : data.deaths}
                </span>
              </div>
            </div>
            <div className="hover:bg-blue-50 md:w-48 bg-white m-2 rounded-md shadow-md">
              <div className="text-sm font-bold md:text-md p-2 bg-red-300 rounded-md">
                <span className="mx-1 text-red-500">Active</span>
              </div>
              <div className="text-lg md:text-2xl bold py-1 md:py-3 text-left">
                <span className="mx-1 text-red-500">
                  {isLoading ? <Spinner /> : data.active}
                </span>
              </div>
            </div>
            <div className="hover:bg-blue-50 md:w-48 bg-yellow-50 m-2 rounded-lg shadow-md">
              <div className="text-sm font-bold md:text-md p-2 bg-yellow-200 rounded-md">
                <span className="mx-1 text-yellow-500">Critical</span>
              </div>
              <div className="text-lg md:text-2xl bold py-1 md:py-3 text-left">
                <span className="mx-1 text-yellow-500">
                  {isLoading ? <Spinner /> : data.critical}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap md:flex-nowrap justify-center mt-5 p-2">
          <div className="w-full md:w-2/3 p-2 bg-white shadow-sm rounded-sm">
            <Alldays />
          </div>
          <div className="md:w-1/3 flex md:h-full mt-3 md:mt-0 mx-auto md:mx-2 p-2 md:p-1 bg-white shadow-sm rounded-sm">
            {isLoading ? <Spinner /> : <Piechart datasets={chartsData} />}
          </div>
        </div>
        <div className="flex flex-wrap md:flex-nowrap mt-3">
          <div className="w-full md:mx-2 md:p-8 ">
            <BarGraph id={"all"} />
          </div>
        </div>
        <div className="flex justify-start w-full mt-1">
          <News />
        </div>
      </div>

      <div className="col-span-2 shadow-sm border-black mt-2 p-2">
        
      </div>
    </div>
  );
}
