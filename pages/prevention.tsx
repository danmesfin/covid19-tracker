/** @format */

import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Preventions: NextPage = () => {
  const preventionMethods = [
    {
      title: "Wear face mask properly !",
      description:
        "Wear a mask in public, especially indoors or when physical distancing is not possible.",
      imageUrl: "/images/wear-mask.jpg",
    },
    {
      title: "Get Vaccinated !",
      description:
        "Get vaccinated when it’s your turn. Follow local guidance about vaccination.",
      imageUrl: "/images/get-vaccinated.jpg",
    },
    {
      title: "Wash your hands",
      description:
        "Clean your hands often. Use soap and water, or an alcohol-based hand rub.",
      imageUrl: "/images/wash-hands.jpg",
    },
    {
      title: "Keep your distance",
      description:
        "Maintain a safe distance from others (at least 1 metre), even if they don’t appear to be sick.",
      imageUrl: "/images/keep-distance.jpg",
    },
  ];
  return (
    <div className="container bg-gray-100">
      <Head>
        <title>Preventions - corona virus</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main className="pt-8 pb-8">
        {preventionMethods.map((item) => (
          <div
            key={item.title}
            className="flex py-2 justify-center flex-wrap md:flex-nowrap shadow-sm bg-blue-50 "
          >
            <div className="flex">
              <Image
                className="rounded-full shadow-lg"
                src={item.imageUrl}
                height={200}
                width={200}
                alt="alt-image"
              />
            </div>
            <div className="flex-col md:basis-1/2 m-2">
              <div className="text-4xl text-center font-bold p-2">
                {item.title}
              </div>
              <div className="text-center p-2">
                <p className="">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default Preventions;
