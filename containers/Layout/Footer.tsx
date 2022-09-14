/** @format */

import React from "react";
import Link from "next/link";
function Footer() {
  const gotoLinks = [
    {
      title: "All technical guidance on covid-19",
      link: "https://www.who.int/emergencies/diseases/novel-coronavirus-2019/technical-guidance",
    },
    {
      title: "Covid-19 vaccines",
      link: "https://www.who.int/emergencies/diseases/novel-coronavirus-2019/covid-19-vaccines",
    },
    {
      title: "Mythbusters",
      link: "https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public/myth-busters",
    },
    {
      title: "Covid-19 vaccine Advice",
      link: "https://www.who.int/emergencies/diseases/novel-coronavirus-2019/covid-19-vaccines/advice",
    },
    {
      title: "Diagnostics",
      link: "https://extranet.who.int/pqweb/vitro-diagnostics/coronavirus-disease-covid-19-pandemic-%E2%80%94-emergency-use-listing-procedure-eul-open",
    },
  ];
  const sitemap = [
    { title: "Home", link: "/" },
    { title: "Covid-19 distribution Map", link: "/map" },
    { title: "See prevention methods", link: "/prevention" },
    { title: "Infected Countries", link: "/country/US" },
  ];
  return (
    <footer className="bottom-0 bg-slate-800 mt-2 p-3 md:py-10 text-white dark:border border-gray-700">
      <div className="flex flex-wrap md:flex-nowrap justify-between mt-2 ">
        <div className="w-full md:w-1/3flex flex-col mx-2 px-3 py-4">
          <span className="mx-2 text-lg font-bold py-3">Site map</span>
          <ul>
            {sitemap.map((item) => (
              <li
                key={item.link}
                className="mx-2 text-gray-400 hover:text-white hover:border-l-2 border-red-500"
              >
                <Link href={item.link}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full md:w-1/3flex flex-col mx-2 px-3 py-4">
          <span className="mx-2 text-lg font-bold py-3">Go to</span>
          <ul>
            {gotoLinks.map((item) => (
              <li
                key={item.link}
                className="mx-2 text-gray-400 hover:text-white hover:border-l-2 border-red-500"
              >
                <Link href={item.link}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-3 px-3 py-4">
          <span className="mx-2 text-lg font-bold py-3">Contact</span>
          <form
            onSubmit={() => onsubmit}
            className="w-full p-2 mx-2 rounded-md text-black border-2 border-gray-700 shadow-md"
          >
            <input
              type="email"
              placeholder="example@email.com"
              className="mt-2 rounded-sm"
            />
            <br></br>
            <input type="text" placeholder="..." className="mt-3 rounded-sm" />
            <button
              className="mt-2 bg-gray-600 shadow-sm shadow-gray-900 px-3 py-1 rounded-md"
              type="submit"
            >
              Send
            </button>
          </form>
        </div>
      </div>
      <hr></hr>
      <div className="flex justify-center mt-2 text-gray-500">
        <span> &copy; Covid-tracker {new Date().getFullYear()} </span>
      </div>
    </footer>
  );
}

export default Footer;
