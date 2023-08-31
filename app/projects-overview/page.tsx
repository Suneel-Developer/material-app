"use client";
import NavbarLayout from "../components/NavbarLayout";
import Breadcrumb from "../components/Breadcrumbs/Breadcrumb";
import Button from "../components/Button";
import Input from "../components/inputs/Input";
import IconButton from "../components/IconButton";
import { FiPlus } from "react-icons/fi";

const ProjectOverview: React.FC = () => {
  return (
    <NavbarLayout>
      <div className="px-2 md:px-7">
        <Breadcrumb pageName="Projects overview" />
        <div className="w-2/3">
          <div className="flex gap-3 mb-5">
            <IconButton
              icon={FiPlus}
              text="Create New"
              onClick={() => {}}
            />
            <Button label="Auto Motion" onClick={() => {}} outline />
            <Button label="Project" onClick={() => {}} outline />
            <Button label="New automation" onClick={() => {}} outline />
            <Button label="Category" onClick={() => {}} outline />
          </div>

          <div>
            <div className="col-span-1 bg-white shadow-boxShadow p-4 pr-0 my-2">
              <h1 className="text-xl font-medium">New auto motion project</h1>
              <hr className=" text-dark_white my-2" />

              <div className="mt-7">
                <label
                  htmlFor="title"
                  className="block text-primary font-medium text-base pb-2"
                >
                  Tittle:
                </label>
                <input
                  type="text"
                  placeholder="Tittle"
                  className=" placeholder:text-primary rounded-md placeholder:text-sm border border-primary w-3/4	px-2 py-3 text-primary"
                />
              </div>

              <div className="mt-7">
                <label
                  htmlFor="description"
                  className="block text-darK_border font-medium text-base pb-2"
                >
                  Description:
                </label>
                <textarea className=" placeholder:text-darK_border resize-none rounded-md placeholder:text-sm border border-darK_border outline-none w-3/4	px-2 py-3 text-primary" />
              </div>

              <div className="mt-7">
                <label
                  htmlFor="category"
                  className="block text-darK_border font-medium text-base pb-2"
                >
                  Category / Type:
                </label>
                <select className=" placeholder:text-darK_border resize-none rounded-md placeholder:text-sm border border-darK_border outline-none w-3/4	px-2 py-3 text-darK_border">
                  <option value="option1">Type</option>
                  <option value="option1">Type</option>
                  <option value="option1">Type</option>
                </select>
              </div>

              <div className="mt-7 w-36">
                <Button label="Create" onClick={() => {}} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </NavbarLayout>
  );
};

export default ProjectOverview;
