import React from "react";

const AddInputs = ({ handleChange, handleCheckboxChange, status }) => {
  return (
    <div className="">
      <div className="flex gap-0 md:gap-3 items-center flex-col md:flex-row  sm:flex-col md:w-full">
        <label htmlFor="sno" className="w-[20%] text-white">
          Id
        </label>
        <input
          type="number"
          placeholder="Enter Id"
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
          placeholder="Enter Name"
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
          placeholder="Enter Description"
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
          placeholder="Enter Start Date"
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
          placeholder="Enter End Date"
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
          onChange={handleCheckboxChange}
        />
      </div>
    </div>
  );
};

export default AddInputs;
