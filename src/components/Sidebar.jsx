import React from 'react';
import { FaBriefcase, FaChartBar, FaUser, FaPlusSquare } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="flex flex-col h-screen bg-white shadow-md w-64 px-10">
            

            {/* Navigation Links */}
            <nav className="flex flex-col gap-5 mt-6">
                <Link to={'/add-job'} className="flex items-center  text-2xl p-2 text-gray-600 hover:text-teal-500">
                    <FaPlusSquare className="mr-3" />
                    <span>Add Job</span>
                </Link>
                <Link to={"/all-jobs"} className="flex items-center text-2xl  p-2 text-gray-600 hover:text-teal-600">
                    <FaBriefcase className="mr-3" />
                    <span>All Jobs</span>
                </Link>
                <Link to={"/stats"} className="flex items-center text-2xl p-2 text-gray-600 hover:text-teal-500">
                    <FaChartBar className="mr-3" />
                    <span>Stats</span>
                </Link>
                <Link to={"/profile"} className="flex items-center text-2xl p-2 text-gray-600 hover:text-teal-500">
                    <FaUser className="mr-3" />
                    <span>Profile</span>
                </Link>
            </nav>
        </div>
    );
};

export default Sidebar;
