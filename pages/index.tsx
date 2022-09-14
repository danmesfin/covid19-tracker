/** @format */

import type { NextPage } from "next";
import Head from "next/head";
import Dashboard from "../containers/Dashboard";

const Home: NextPage = () => {
  return (
    <div className=" bg-gray-100">
      <Head>
        <title>TrackCovid - Covid-19 Tracker</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" title="corona virus tracker website" />
      </Head>
      <main className="flex flex-col mx-auto dark:bg-gray-800">
        <Dashboard />
      </main>
    </div>
  );
};

export default Home;
