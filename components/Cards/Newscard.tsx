/**
 *
 *
 * @format
 */

/* eslint-disable @next/next/no-img-element */

function Newscard({
  href,
  Image,
  header,
  author,
  publishedAt,
}: {
  href: string;
  Image: string;
  header: string;
  author: string;
  publishedAt: any | Number | string;
}) {
  return (
    <div className="mt-2 w-full flex">
      <a href={href} className="w-full">
        <div className="flex flex-wrap justify-start md:flex-nowrap rounded-md border border-gray-400 border-opacity-10 hover:bg-gray-200 dark:hover:bg-gray-700 shadow-sm">
          {" "}
          <div className="w-full flex justify-center md:w-1/4 mx-2 md:m-0">
            <img
              className="w-full h-36 md:w-48 md:h-24 object-cover"
              src={Image}
              alt="image-thumbnail"
            />
          </div>
          <div className="w-full md:w-3/4 flex flex-col mx-2 py-2">
            <p className="py-1 text-md font-bold dark:text-white">{header}</p>
            <p className="text-sm text-blue-500">{author}</p>
            <p className="block justify-end text-xs text-gray-600 mx-2 dark:text-slate-200">
              {"publishedAt"}
            </p>
          </div>
        </div>
      </a>
    </div>
  );
}

export default Newscard;
