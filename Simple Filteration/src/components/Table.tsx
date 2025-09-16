import { useState } from "react"
import { data } from "../utils/data"
import { BiSort } from "react-icons/bi"
import { AiOutlineDash, AiOutlineDown } from "react-icons/ai"

const Table = () => {
    const[projects,setProjects]=useState(data)
  return (
    <div className="p-4 w-[93%] ml-[5rem]">
        {/* Sorting */}

        <div className="flex items-center mb-5">
            <button className="border border-gray-700 flex items-center justify-center text-white p-2 rounded">
                <BiSort className="mr-[0.3rem]"/> Sort
                <AiOutlineDown className="ml-2" />
            </button>
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
                
            </tbody>
        </div>

        {/* Pagination */}
    </div>
  )
}

export default Table