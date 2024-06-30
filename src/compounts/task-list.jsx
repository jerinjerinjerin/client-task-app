import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { ApiUrl } from "../apiUrl";
import { deleteTask } from "../redux/slice/taskSlice";
import { formatDate } from "../utils/helper";

const TaskList = () => {
  const dispatch = useDispatch();
  //get data redux
  const tasks = useSelector((state) => state.tasks.tasks);
  const url = ApiUrl;

  const handleDelete = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this task?"
    );
    if (!confirmed) return;
    try {
      const response = await axios.delete(`${url}/task/delete-task/${id}`);

      if (response.status === 200) {
        dispatch(deleteTask(id));
        toast.success("Task deleted successfully");
      } else {
        toast.error("Failed to delete task");
      }
    } catch (error) {
      toast.error("Something went wrong, please try again later");
    }
  };

  if (tasks.length === 0) {
    return (
      <div className="bg-slate-800 text-white flex items-center justify-center h-full">
        No tasks found
      </div>
    );
  }

  return (
    <div className="overflow-x-auto h-full w-[98%] mx-auto bg-gray-800 pt-5">
      <table className="min-w-full divide-y divide-gray-200 bg-slate-800 shadow-md border">
        <thead className="bg-gray-800 text-white text-center">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-xs font-medium uppercase tracking-wider border"
            >
              Id
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-xs font-medium uppercase tracking-wider border"
            >
              Task Name
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-xs font-medium uppercase tracking-wider border"
            >
              Description
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-xs font-medium uppercase tracking-wider border"
            >
              Start Date
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-xs font-medium uppercase tracking-wider border"
            >
              End Date
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-xs font-medium uppercase tracking-wider border"
            >
              Status
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-xs font-medium uppercase tracking-wider border"
            >
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="text-white bg-slate-800 divide-y divide-gray-200 text-center">
          {tasks.map((task, index) => (
            <tr key={index} className="border">
              <td className="px-6 py-4 whitespace-nowrap border">
                {task.sno}
              </td>
              <td className="px-6 py-4 whitespace-nowrap border">
                {task.name}
              </td>
              <td className="px-6 py-4 whitespace-nowrap border">
                {task.description.length > 50
                  ? `${task.description.slice(0, 50)}...`
                  : task.description}
              </td>
              <td className="px-6 py-4 whitespace-nowrap border">
                {formatDate(task.startDate)}
              </td>
              <td className="px-6 py-4 whitespace-nowrap border">
                {formatDate(task.endDate)}
              </td>
              <td className="px-6 py-4 whitespace-nowrap border">
                <span
                  className={task.status ? "text-green-500" : "text-red-500"}
                >
                  {task.status ? "Completed" : "Pending"}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap border">
                <div className="flex items-center space-x-1 justify-center">
                  <Link to={`/edit-task/${task._id}`}>
                    <button className="action-buttons bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded">
                      Update
                    </button>
                  </Link>
                  <button
                    className="action-buttons bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded"
                    onClick={() => handleDelete(task._id)}
                  >
                    Delete
                  </button>
                  <Link to={`/view-task/${task._id}`}>
                    <button className="action-buttons bg-green-500 hover:bg-green-600 text-white px-2 py-1 rounded">
                      View
                    </button>
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskList;
