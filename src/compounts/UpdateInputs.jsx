import React from "react";
import { formatDate } from "../utils/helper";

const UpdateInputs = ({ handleChange, handleCheckboxChange, status, task }) => {
  return (
    <div className="">
      <div className="flex gap-0 md:gap-3 items-center flex-col md:flex-row  sm:flex-col md:w-full">
        <label htmlFor="sno" className="w-[20%] text-white">
          Id
        </label>
        <input
          type="number"
          value={task.sno}
          className="input-area"
          name="sno"
          onChange={handleChange}
        />
      </div>
      <div className="flex gap-0 md:gap-3 items-center mt-5 flex-col md:flex-row sm:flex-col">
        <label htmlFor="name" className="w-[20%] text-white">
          Name
        </label>
        <input
          type="text"
          name="name"
          value={task.name}
          className="input-area"
          onChange={handleChange}
        />
      </div>
      <div className="flex gap-0 md:gap-3 items-center mt-5 flex-col md:flex-row">
        <label htmlFor="description" className="w-[20%] text-white">
          Description
        </label>
        <textarea
          rows={10}
          type="text"
          name="description"
          value={task.description}
          className="input-area"
          onChange={handleChange}
        />
      </div>
      <div className="flex gap-0 md:gap-3 items-center mt-5 flex-col md:flex-row sm:flex-col">
        <label htmlFor="startDate" className="w-[20%] text-white">
          Start Date
        </label>
        <input
          type="date"
          name="startDate"
          value={formatDate(task.startDate)}
          className="input-area"
          onChange={handleChange}
        />
      </div>
      <div className="flex gap-0 md:gap-3 items-center mt-5 flex-col md:flex-row sm:flex-col">
        <label htmlFor="endDate" className="w-[20%] text-white">
          End Date
        </label>
        <input
          type="date"
          name="endDate"
          value={formatDate(task.endDate)}
          className="input-area w-full"
          onChange={handleChange}
        />
      </div>
      <div className="flex justify-between px-10 gap-3 md:gap-3 items-center mt-5 flex-row  ">
        <label className="text-white">Completed task only checkbox click</label>
        <input
          type="checkbox"
          className="size-5"
          checked={status}
          value={task.status}
          onChange={handleCheckboxChange}
        />
      </div>
    </div>
  );
};

export default UpdateInputs;
