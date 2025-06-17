import { FaAlignLeft, FaRegUserCircle } from "react-icons/fa";
import { MdOutlineNightlightRound } from "react-icons/md";
import { TiArrowSortedDown } from "react-icons/ti";
import { useState } from "react";
import { Link } from "react-router-dom";
function Navbar() {
    const [toggleMenu, setToggleMenu] = useState(false);
    const showMenu = () => {
        setToggleMenu(!toggleMenu);
    }
    return (
        <>
            <div className="flex justify-between items-center h-20 px-2 py-4">
                <div className="flex justify-between items-center p-4 text-3xl text-teal-500">
                    <FaAlignLeft />
                </div>

                <h2 className="text-4xl text-gray-700">
                    Dashboard
                </h2>

                <div className="relative">
                <div className="flex items-center justify-evenly transition-colors duration-300 w-40 h-15 gap-2"
                    >
                    <div>
                        <div className="text-2xl px-4 py-2">
                            <MdOutlineNightlightRound />
                        </div>
                    </div>
                    <button onClick={showMenu} className="flex justify-evenly items-center gap-3 h-10 rounded-xl px-4 py-2 bg-teal-500 text-white text-xl cursor-pointer">
                        <FaRegUserCircle />
                        <span className="font-semibold text-center">
                            Jett
                        </span>
                        <TiArrowSortedDown />
                    </button>
                </div>
                {toggleMenu && (
                    <Link to={'/'} className="absolute bg-teal-400 left-15 w-33 text-white text-lg text-center rounded-lg shadow-lg border border-gray-200 py-2 z-10 animate-in fade-in slide-in-from-top-2 duration-200">
                        Logout
                    </Link>
                )}
                </div>
            </div>
        </>
    )
}

export default Navbar;