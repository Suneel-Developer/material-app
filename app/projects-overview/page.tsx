"use client";
import NavbarLayout from "../components/NavbarLayout";
import Breadcrumb from "../components/Breadcrumbs/Breadcrumb";
import Button from "../components/Button";
import InputOutline from "../components/inputs/InputOutline";
import TextArea from "../components/inputs/TextArea";
import Label from "../components/Label";
import IconButton from "../components/IconButton";
import { FiPlus } from "react-icons/fi";

const ProjectOverview: React.FC = () => {
  return (
    <NavbarLayout>
      <div className="px-2 md:px-7">
        <Breadcrumb pageName="Projects overview" />
        <div className="md:w-2/3">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-5">
            <IconButton icon={FiPlus} text="Create New" onClick={() => {}} />
            <Button label="Auto Motion" onClick={() => {}} outline/>
            <Button label="Project" onClick={() => {}} outline/>
            <Button label="New automation" onClick={() => {}} outline/>
            <Button label="Category" onClick={() => {}} outline/>
          </div>

          <div>
            <div className="col-span-1 bg-white shadow-boxShadow p-4 pr-0 my-2">
              <h1 className="text-xl font-medium">New auto motion project</h1>
              <hr className=" text-dark_white my-2" />
              <div className="md:w-3/4">
                <div className="mt-7">
                  <Label text="Title" primary/>
                  <InputOutline
                    id="tittle"
                    label="Tittle"
                    type="text"
                    piramary
                  />
                </div>

                <div className="mt-7">
                  <Label text="Description:" />
                  <TextArea id="description" label="" rows={4} />
                </div>

                <div className="mt-7">
                  <Label text="Category / Type:" />

                  <select className="placeholder:text-darK_border resize-none rounded-md placeholder:text-sm border border-light_gray outline-none w-full	px-2 py-3 text-darK_border focus:border-primary focus:text-primary">
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
      </div>
    </NavbarLayout>
  );
};

export default ProjectOverview;
