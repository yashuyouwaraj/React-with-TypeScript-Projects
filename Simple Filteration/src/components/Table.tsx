import { useState } from "react";
import { data } from "../utils/data";
import { BiSort } from "react-icons/bi";
import { AiOutlineDash, AiOutlineDown } from "react-icons/ai";
import { MdSort } from "react-icons/md";

const Table = () => {
  const [projects, setProjects] = useState(data);
  const [dropdownVisible, SetDropdownVisible] = useState(false);
  const [filterVisible,setFiltersVisible]=useState(false)
  const [sortConfig, setSortConfig] = useState<{
    key: String;
    direction: String;
  } | null>(null);
  const sortProjects = (key: string) => {
    let sortedProjects = [...projects];
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "ascending"
    ) {
      sortProjects.sort((a, b) => (a[key] > b[key] ? -1 : 1));
      setSortConfig({ key, direction: "descending" });
    } else {
      sortProjects.sort((a, b) => (a[key] > b[key] ? 1 : -1));
      setSortConfig({ key, direction: "ascending" });
    }
    setProjects(sortedProjects);
  };
  const handleSortOptionClick = (key: string) => {
    sortProjects(key);
    SetDropdownVisible(false);
  };
  return (
    <div className="p-4 w-[93%] ml-[5rem]">
      {/* Sorting */}
      <div className="flex items-center mb-5">
        <div className="relative">
          <button
            onClick={() => SetDropdownVisible(!dropdownVisible)}
            className="border border-gray-700 flex items-center justify-center text-white p-2 rounded"
          >
            <BiSort className="mr-[0.3rem]" /> Sort
            <AiOutlineDown className="ml-2" />
          </button>
          {dropdownVisible && (
            <div className="absolute top-full left-0 mt-2 bg-gray-800 border-gray-700 rounded shadown-lg">
              <button
                onClick={() => handleSortOptionClick("client")}
                className="block px-4 py-2 text-white w-full hover:bg-gray-700"
              >
                Name
              </button>
              <button
                onClick={() => handleSortOptionClick("country")}
                className="block px-4 py-2 text-white w-full hover:bg-gray-700"
              >
                Country
              </button>
              <button
                onClick={() => handleSortOptionClick("date")}
                className="block px-4 py-2 text-white w-full hover:bg-gray-700"
              >
                Date
              </button>
            </div>
          )}
        </div>
        <div className="relative ml-4 w-full">
          <button onClick={()=> setFiltersVisible(!filterVisible)} className="border border-gray-700 flex items-center justify-center text-white p-2 rounded">
            <MdSort className="mr-[0.3rem]" />
            Filters <AiOutlineDown className="ml-2" />
          </button>
          {filterVisible && (
        <div className="absolute top-full left-0 mt-2 bg-gray-800 border-gray-700 rounded shadow-lg p-4">
            <div className="mb-2">
                <label className="block text-white">Filter by Name: </label>
                <input type="text" name="name" className="bg-gray-900 text-white rounded p-2 w-full" />
            </div>
        </div>
      )}
        </div>
      </div>
      

      {/* Main Table */}

      <div className="min-w-full table-auto rounded border border-gray-700 text-white">
        <thead>
          <tr>
            <th className="px-5 py-3 text-left">Image</th>
            <th className="px-5 py-3 text-left">Name</th>
            <th className="px-5 py-3 text-left">Country</th>
            <th className="px-5 py-3 text-left">Email</th>
            <th className="px-5 py-3 text-left">Project Name</th>
            <th className="px-5 py-3 text-left">Task Progress</th>
            <th className="px-5 py-3 text-left">Staus</th>
            <th className="px-5 py-3 text-left">Date</th>
            <th className="px-5 py-3 text-left">Actions</th>
            <th className="px-5 py-3 text-left"></th>
          </tr>
        </thead>
        <tbody>
          <tr className="border border-gray-700">
            <td className="px-4 py-2">
              <img src={projects.image} alt={projects.client} />
            </td>
            <td className="px-4 py-2">{projects.client}</td>
            <td className="px-4 py-2">{projects.country}</td>
            <td className="px-4 py-2">{projects.email}</td>
            <td className="px-4 py-2">{projects.project}</td>
          </tr>
        </tbody>
      </div>

      {/* Pagination */}

      <div className="flex justify-end mt-4">
        <button className="px-4 py-2 bg-gray-700 text-white rounded mr-2 disabled:opacity-50">
          Previous
        </button>
        <span className="px-4 py-2 text-white">Page 1 of 4</span>
        <button className="px-4 py-2 bg-gray-700 text-white rounded mr-2 disabled:opacity-50">
          Next
        </button>
      </div>
    </div>
  );
};

export default Table;
