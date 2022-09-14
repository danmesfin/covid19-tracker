/* eslint-disable @next/next/no-img-element*/

import { useState, useEffect } from "react";
import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";
import LineChart from "../../components/Linechart";
import History from "../../containers/History";
import Piechart from "../../components/Charts/piechart";
import News from "../../containers/News";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch(`https://disease.sh/v3/covid-19/countries`);
  const data: Object = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data }, // will be passed to the page component as props
  };
};

const Post: NextPage<Object | any> = ({ data }) => {
  const router = useRouter();
  const { cid } = router.query;
  const [selectedCountry, setCountry] = useState(cid);

  const countriesListed: any = [];
  data.map((element: { country: String; countryInfo: { iso2: String } }) => {
    return countriesListed.push({
      name: element.country,
      code: element.countryInfo.iso2,
    });
  });

  const country: Array<any> = data.filter(
    (item: { countryInfo: { iso2: string | undefined } }) =>
      item.countryInfo.iso2 === selectedCountry
  );
  const deathsPerOneMillion = (country[0].deaths / country[0].cases) * 100;
  const recoveredPerOneMillion =
    (country[0].recovered / country[0].cases) * 100;

  const handleChange = (event: any) => {
    setCountry(event.target.value);
  };

  return (
    <>
      <div className="container mx-auto md:px-10">
        <Head>
          <title>Overview | {selectedCountry} </title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        {country.map((country) => (
          <div key={country} className="container">
            <div className="flex justify-center mt-3">
              <div className="inline-block relative w-64">
                <select
                  onChange={handleChange}
                  className="form-select appearance-none
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  aria-label="Default select"
                >
                  <option value={selectedCountry}>{selectedCountry}</option>
                  {countriesListed.map((item: any) => (
                    <option key={item.name} value={item.code}>
                      {item.name}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap md:flex-nowrap m-2 px-3 py-2 font-medium border rounded-md
             border-black shadow-sm  dark:border-gray-700">
              <div className="md:w-1/3 flex-col text-sm md:text-lg font-medium py-2 px-2 md:px-6">
                <div className="flex">
                  <img
                    src={country.countryInfo.flag}
                    alt="flag"
                    className="w-24"
                  />
                </div>{" "}
                <span className="p-1 dark:text-white">{country.country} Overview</span>
              </div>
              <div className="w-full md:w-2/3 flex justify-between  text-red-600">
                <div className="flex-col">
                  <div className="flex justify-center text-sm md:text-base p-2">
                    <span className="mx-2">Cases</span>
                  </div>
                  <div className="text-sm md:text-3xl text-center px-2">
                    <span className="mx-2">{country.cases}</span>
                  </div>
                </div>
                <div className="flex-col  text-gray-600">
                  <div className="flex justify-center text-base p-2">
                    <span className="mx-2">Death</span>
                  </div>
                  <div className="text-sm md:text-3xl text-center px-2">
                    <span className="mx-2">{country.deaths}</span>
                  </div>
                </div>
                <div className="flex-col  text-green-600">
                  <div className="flex justify-center text-sm md:text-base p-2">
                    <span className="mx-2">Recovered</span>
                  </div>
                  <div className="text-sm md:text-3xl text-center px-2">
                    <span className="mx-2">{country.recovered}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-row md:flex justify-center m-2 px-3 py-2 border
                      rounded-md border-black  dark:border-gray-700">
              <LineChart name={"Criticals in ICU"} value={country.critical} />
              <LineChart name={"Today cases"} value={country.todayCases} />
              <LineChart name={"Today deaths"} value={country.todayDeaths} />
            </div>
            <div className="flex flex-wrap md:flex-nowrap pt-4 md:px-4 ">
              <div className="w-full md:w-1/2 md:p-4 border border-black rounded-sm  dark:border-gray-700">
                <History id={cid} />
              </div>
              <div className="w-full md:w-1/2 md:mx-2 md:p-4 flex md:flex-nowrap justify-center">
                <div className="w-1/2 md:mx-2 md:px-5">
                  <Piechart
                    dataset={deathsPerOneMillion}
                    label={"Death rate"}
                  />
                </div>
                <div className="w-1/2 md:mx-2 md:px-5">
                  {" "}
                  <Piechart
                    dataset={recoveredPerOneMillion}
                    label={"Recovery rate"}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
        {/* uncomment below if you want load the news section, but
         first you have to set the .env file and NewsAPi key as 
          NEXT_PUBLIC_NEWSAPI_KEY
        <div className="w-3/4">
          <News />
        </div>
                  */}
      </div>
    </>
  );
};

export default Post;
