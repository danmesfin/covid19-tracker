import React, { ReactNode } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const options = {
  plugins: {
    legend: {
      display: false,
    },
  },
  elements: {
    line: {
        tension: 0,
        borderWidth: 2,
    },
    point: {
        radius: 0,
        hitRadius: 0,
    },
  },
  scales: {
    xAxis: {
        display: false,
    },
    yAxis: {
        display: false,
    }
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      fill: true,
      data: [0.2,0.25,0.35,0.3,0.4,0.35,0.45],
      borderColor: 'rgba(27,197,268,0.7)',
      backgroundColor: 'rgba(27,197,268,0.3)',
    },
  ],
};

export default function LineChart({name, value}:{ name: String, value: ReactNode}) {
  //const newData = {...data, ...datasets}
  return (
    <div className='relative md:w-96 px-1 py-2 m-2 shadow-sm rounded-md border-2 border-green-100 dark:border-gray-700'>
        <div className='flex flex-col p-1 m-2'>
            <div className='text-2xl font-medium dark:text-white'>{name}</div>
            <div className='text-2xl font-medium dark:text-white'>{value}</div>
        </div>
        <div className='absolute w-48 bottom-0 right-0'>
          <Line options={options} width={100} height={50} data={data} />
        </div>
    </div>);
}
