/** @format */

import { NextPage } from "next";
import Map from "../containers/Dashboard/Map";
import PaginatedItems from "../components/Pagination";
import BarGraph from "../containers/Dashboard/components/BarGraph";
import Piechart from "../containers/Dashboard/components/Charts";
import Listed from "../containers/Dashboard/components/Listed";
import Alldays from "../containers/Dashboard/components/Alldays";
const Analytics: NextPage = () => {
  return (
    <div className="container my-2">
      <div className="flex flex-wrap md:flex-nowrap justify-center md:mt-3 md:mx-4 border border-gray-400 rounded-md">
        <div className="w-full z-0 md:w-1/2 mt-3 md:mx-2 border rounded-md">
          <p className="text-sm font-bold justify-center mx-2 p-1">
            | Click on marker to see details
          </p>
          <Map />
        </div>
        <div className="w-full md:w-1/2 mt-3 md:mx-2 border rounded-md">
          <p className="text-sm font-bold justify-center mx-2 p-1">
            Record for the past 365 days
          </p>
          <Alldays />
        </div>
      </div>
      <div className="flex flex-wrap md:flex-nowrap mt-5 md:mx-2">
        <div className="w-full justify-center md:w-1/2 mt-3 md:mx-2 border border-black">
          <div className="flex justify-center font-bold text-sm md:text-lg">
            <p>Continental data - in order of most active cases</p>
          </div>
          <Listed />
        </div>
        <div className="w-full md:w-1/2 mt-3 md:mx-2 border border-black">
          <BarGraph id={"all"} />
        </div>
      </div>
    </div>
  );
};
export default Analytics;
