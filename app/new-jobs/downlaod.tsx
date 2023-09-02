import React from "react";
import { FiPlus } from "react-icons/fi";
interface DownloadProps {
  onChange: () => void;
}
const Downlaod: React.FC<DownloadProps> = ({ onChange }) => {
  return (
    <div className="w-full">
      <div className="text-dark_border w-full">
        <label htmlFor="title" className="block font-normal text-base pb-2">
          Folder:
        </label>

        <select onChange={onChange} className="w-full placeholder:text-dark_border resize-none rounded-md placeholder:text-sm border border-dark_border outline-none	px-2 py-3 text-dark_border">
          <option value="option1">Browse File</option>
          <option value="option1">Type</option>
          <option value="option1">Type</option>
        </select>
      </div>

      {/* Add Input File  */}
      <div className="flex items-center justify-start gap-4 mt-2 w-full">
        <div>
          <input type="file" id="file" className="hidden" />
          <label
            htmlFor="file"
            className="cursor-pointer flex items-center gap-1 text-primary text-sm font-medium"
          >
            <FiPlus />
            Add
          </label>
        </div>

        <button className="border-none text-sm font-medium text-error">
          Remove
        </button>
      </div>
    </div>
  );
};

export default Downlaod;
