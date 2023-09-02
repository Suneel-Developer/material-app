"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import NavbarLayout from "../components/NavbarLayout";
import Input from "../components/inputs/Input";
import Button from "../components/Button";
import { IoFilter } from "react-icons/io5";
import { RiLoopLeftLine } from "react-icons/ri";
import Card from "./Card";
import BarChart from "./BarChart";
import Source from "./Source";
import TableOne from "./TableOne";
import TableTwo from "./TableTwo";
import WorldChart from "./WorldChart";
const Dashboard: React.FC = () => {
  const router = useRouter();
  return (
    <NavbarLayout>
      <div className="px-2 md:px-7">
        {/* Header */}
        <div className="flex justify-between items-center border-b border-dark_white py-4 ">
          <div className="flex flex-wrap items-center gap-3">
            <h1 className="text-sm md:text-xl font-medium">Welcome back, Lucy </h1>
            <p className="text-xs md:text-sm">Monday, 29 April 2019</p>
          </div>
          <div className="flex items-center gap-4">
            <IoFilter size={24} />
            <RiLoopLeftLine size={24} />
            <label className="bg-primary text-white p-1 px-2 rounded text-xs md:text-sm">
              Today: April 29
            </label>
          </div>
        </div>

        {/*  */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center py-4  gap-4">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4">
            <Card
              title="Sales Today"
              label="Today"
              heading="Sales Today"
              diff="26%"
            />
            <Card
              title="Visitors"
              label="Today"
              heading="Sales Today"
              diff="26%"
            />
            <Card
              title="Total Earnings"
              label="Today"
              heading="Sales Today"
              diff="26%"
            />
            <Card
              title="Pending Orders"
              label="Today"
              heading="Sales Today"
              diff="26%"
            />
          </div>
          <div className="flex-1">
            <BarChart title="Card Title" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 py-4 gap-4">
          <div className="md:col-span-2">
            <WorldChart
              title="Card Title"
              mapName="world_mill"
              width={800}
              height={600}
            />
          </div>
          <div className="col-span-1">
            <Source title="Source/Medium" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3  py-4  gap-4">
          <div className="col-span-1">
            <TableOne title="Latest projects" />
          </div>
          <div className="md:col-span-2">
            <TableTwo title="Latest projects" />
          </div>
        </div>
      </div>
    </NavbarLayout>
  );
};

export default Dashboard;
