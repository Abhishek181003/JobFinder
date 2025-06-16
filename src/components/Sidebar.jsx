import React from 'react';
import { FaBriefcase, FaChartBar, FaUser, FaPlusSquare } from 'react-icons/fa';

const Sidebar = () => {
    return (
        <div className="flex flex-col h-screen bg-white shadow-md w-64 px-10">
            

            {/* Navigation Links */}
            <nav className="flex flex-col gap-5 mt-6">
                <a href="#" className="flex items-center  text-2xl p-2 text-gray-600 hover:text-teal-500">
                    <FaPlusSquare className="mr-3" />
                    <span>Add Job</span>
                </a>
                <a href="#" className="flex items-center text-2xl  p-2 text-gray-600 hover:text-teal-600">
                    <FaBriefcase className="mr-3" />
                    <span>All Jobs</span>
                </a>
                <a href="#" className="flex items-center text-2xl p-2 text-gray-600 hover:text-teal-500">
                    <FaChartBar className="mr-3" />
                    <span>Stats</span>
                </a>
                <a href="#" className="flex items-center text-2xl p-2 text-gray-600 hover:text-teal-500">
                    <FaUser className="mr-3" />
                    <span>Profile</span>
                </a>
            </nav>
        </div>
    );
};

export default Sidebar;
