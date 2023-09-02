"use client";
import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

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
  const secondary = "#49BEFF";

  // chart
  const optionsLineChart: any = {
    chart: {
      type: "line", // Change to line chart type
      fontFamily: "'Plus Jakarta Sans', sans-serif;",
      foreColor: "#adb0bb",
      toolbar: {
        show: false,
      },
      height: 220,
    },
    colors: [primary, secondary],
    plotOptions: {
      bar: {
        horizontal: false,
        barHeight: "50%",
        columnWidth: "42%",
        borderRadius: [0],
        borderRadiusApplication: "end",
        borderRadiusWhenStacked: "all",
      },
    },

    stroke: {
      show: true,
      width: 5,
      curve: "smooth", // Use smooth curve for line chart
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    grid: {
      borderColor: "rgba(0,0,0,0.1)",
      strokeDashArray: 3,
      xaxis: {
        lines: {
          show: false,
        },
      },
    },
    yaxis: {
      tickAmount: 4,
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      axisBorder: {
        show: false,
      },
    },
    tooltip: {
      theme: "light",
      fillSeriesColor: false,
    },
  };
  const seriesLineChart: any = [
    {
      name: "Series 1",
      data: [76, 85, 101, 98, 87, 105, 91, 88, 92, 96, 85, 77], // Your data points here
    },
  ];

  return (
    <div className="bg-white rounded">
      <div className="flex items-center justify-between p-4 pb-0">
        <p className="font-medium">{title}</p>
        <BsThreeDotsVertical />
      </div>

      <Chart
        options={optionsLineChart}
        series={seriesLineChart}
        type="line"
        height="420px"
      />
    </div>
  );
};

export default Card;
