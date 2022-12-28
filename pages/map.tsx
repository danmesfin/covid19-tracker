/** @format */

import { NextPage } from "next";
import Map from "../containers/Dashboard/Map";

const Maps: NextPage = () => {
  return (
    <div className="flex flex-col md:p-2 dark:bg-gray-800">
      <p className="text-sm mx-auto dark:text-white">
        Click on the marker icon to see detail about specfic country.
      </p>
      <div className="z-[0] my-5">
      <Map />
      </div>
    </div>
  );
};
export default Maps;
