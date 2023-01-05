/** @format */

import { NextPage } from "next";
import Map from "../containers/Dashboard/Map";
import BarGraph from "../containers/Dashboard/components/BarGraph";
import Piechart from "../containers/Dashboard/components/Charts";
import Listed from "../containers/Dashboard/components/Listed";
import Alldays from "../containers/Dashboard/components/Alldays";
const Analytics: NextPage = () => {
  return (
    <div className="container my-2 mx-auto">
      <div className="flex flex-wrap md:flex-nowrap justify-center md:mt-8 md:mx-4  rounded-md">
        <div className="w-full z-0 md:w-1/2 mt-3 md:mx-2 border border-black shadow-md rounded-md dark:bg-slate-800">
          <p className="text-sm font-bold justify-center mx-2 p-1 dark:text-white">
            | Click on marker to see details
          </p>
          <div className="flex py-3 ">
            <Map />
          </div>
        </div>
        <div className="w-full md:w-1/2 mt-3 md:mx-2 border border-black rounded-md dark:bg-slate-800">
          <p className="text-sm font-bold justify-center mx-2 p-1 dark:text-white">
            Record for the past 365 days
          </p>
          <Alldays />
        </div>
      </div>
      <div className="flex flex-wrap md:flex-nowrap mt-5 md:mx-2">
        <div className="w-full justify-center md:w-1/2 mt-3 md:mx-2 border border-black dark:bg-slate-800 rounded-md">
          <div className="flex mt-2 justify-center font-bold text-sm md:text-lg dark:text-white ">
            <p>Continental data - in order of most active cases</p>
          </div>
          <div className="md:flex">
            <Listed />
          </div>
        </div>
        <div className="w-full md:w-1/2 mt-3 md:mx-2 border border-black dark:bg-slate-800 rounded-md">
          <BarGraph id={"all"} />
        </div>
      </div>
    </div>
  );
};
export default Analytics;
