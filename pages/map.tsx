/** @format */

import { NextPage } from "next";
import Map from "../containers/Dashboard/Map";

const Maps: NextPage = () => {
  return (
    <div className="flex flex-col md:p-2">
      <p className="text-sm mx-auto">
        Click on the marker icon to see detail about specfic country.
      </p>
      <Map />
    </div>
  );
};
export default Maps;
