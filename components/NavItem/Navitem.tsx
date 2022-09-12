/** @format */

import React from "react";
import Link from "next/link";

function Navitem(Props: any) {
  return (
    <li
      className={`block font-semibold py-2 pr-4 pl-3 rounded-md  md:p-0 dark:text-white hover:text-red-700 ${
        Props.active ? "text-red-600" : ""
      }`}
      aria-current="page"
    >
      <Link href={Props.link}>{Props.menu}</Link>
    </li>
  );
}

export default Navitem;
