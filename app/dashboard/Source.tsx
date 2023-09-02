"use client";
import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
// import Chart from 'react-apexcharts'
interface CardProps {
  title: string;
}

const Card: React.FC<CardProps> = ({ title }) => {
  const [month, setMonth] = React.useState("1");

  const handleChange = (event: any) => {
    setMonth(event.target.value);
  };

  // chart color
  const primary = "#5D87FF";
  const secondary = "rgba(0, 0, 0, 0.54)";

  // chart
  const optionscolumnchart: any = {
    chart: {
      type: "donut",
    },
    colors: [primary, primary, secondary],
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
            name: {
                offsetY: 5,
            },    
                                
            total: {
                show: true,
                showAlways: true,
                fontSize: '16px',
                fontFamily: 'Helvetica, Arial, sans-serif',
                fontWeight: 600,
                label: `+23%`,
                color: '#0065bd',                            
                formatter: function () {
                    return '';
                }
            }
          }
        }
      }
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };
  const seriescolumnchart: any = [44, 55, 41];

  return (
    <div className="bg-white rounded">
      <div className="flex items-center justify-between p-4 pb-0">
        <p className="font-medium">{title}</p>
        <BsThreeDotsVertical />
      </div>

      <Chart
        options={optionscolumnchart}
        series={seriescolumnchart}
        type="donut"
        height="220px"
      />

      <div className="relative flex flex-col w-full p-4 min-w-0 mb-0 break-words bg-white border-0 border-transparent border-solid  rounded-2xl bg-clip-border">
   
        <div className="flex-auto px-0 pt-0 pb-2">
          <div className="p-0 overflow-x-auto">
            <table className="items-center w-full mb-0 align-top border-light_gray ">
              <thead className="align-bottom">
                <tr>
                  <th className="py-3 font-medium text-left bg-transparent border-b border-light_gray  border-b-solid tracking-none whitespace-nowra">
                  Source
                  </th>
                  <th className="py-3 font-medium text-left bg-transparent border-b border-light_gray  border-b-solid tracking-none whitespace-nowra">
                  Revenue
                  </th>
                  <th className="py-3 font-medium text-left bg-transparent border-b border-light_gray  border-b-solid tracking-none whitespace-nowra">
                  Value
                  </th>
                </tr>
              </thead>
              <tbody>  {[0, 1, 2].map((v, i) => {
                  return (
                    <tr>
                      <td className="py-3  align-middle bg-transparent border-b  border-light_gray whitespace-nowrap ">
                        <span className=" leading-tight ">Social </span>
                      </td>
                      <td className="py-3  align-middle bg-transparent border-b border-light_gray whitespace-nowrap ">
                        <span className=" leading-tight ">270 </span>
                      </td>
                      <td className="py-3  align-middle bg-transparent border-b border-light_gray whitespace-nowrap ">
                        <span className=" leading-tight ">+35% </span>
                      </td>
                    </tr>
                  );
                })}</tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
