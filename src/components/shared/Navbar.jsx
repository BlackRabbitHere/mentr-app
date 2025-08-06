import { useState } from "react";
import {FaUserPlus } from "react-icons/fa"
import { Link, useLocation } from "react-router-dom"
import {RxCross2} from "react-icons/rx"
import {IoIosMenu} from "react-icons/io"



const Navbar=()=>{
    const path=useLocation().pathname;
    const [navbarOpen,setNavbarOpen]=useState(false);
    
    return(
        <div 
            className="h-[70px] text-white z-50 flex items-center sticky top-0"
            style={{ background: 'linear-gradient(to right, #111827, #1f2937)' }}>
            <div className="lg:px-14 sm:px-8 px-4 w-full flex justify-between">
                <Link to="/" className="flex items-center text-2xl font-bold">
                    
                    <span className="font-[Poppins]">Mentr</span>
                </Link>
            <ul className={`flex sm:gap-10 gap-4 sm:items-center  text-slate-800 sm:static absolute left-0 top-[70px] sm:shadow-none shadow-md ${
                navbarOpen ? "h-fit sm:pb-0 pb-5" : "h-0 overflow-hidden"
                }  transition-all duration-100 sm:h-fit sm:bg-none  text-white sm:w-fit w-full sm:flex-row flex-col px-4 sm:px-0`}
                style={{
                        background: window.innerWidth < 640 ? "linear-gradient(to right, #111827, #1f2937)" : undefined,
                    }}
                >


                    {/* Signup Button */}
                    
                    <li className="font-[500] transition-all duration-150">
                        <Link className="flex bg-blue-800 items-center space-x-2 px-4 py-[6px]   
                            text-white font-semibold rounded-md shadow-lg "
                    to="/">
                            <FaUserPlus/>
                            <span>Signup</span>
                        </Link>
                    </li>


                    {/* Signup Button */}
                    
                    <li className="font-[500] transition-all duration-150">
                        <Link className="flex bg-blue-800 items-center space-x-2 px-4 py-[6px]   
                            text-white font-semibold rounded-md shadow-lg "
                    to="/">
                            <FaUserPlus/>
                            <span>Become a Mentor</span>
                        </Link>
                    </li>
                    
                </ul>
                <button
                    onClick={()=>setNavbarOpen(!navbarOpen)}
                    className="sm:hidden flex items-center sm:mt-0 mt-2">
                        {navbarOpen?(
                            <RxCross2 className="text-white text-3xl"/>
                        ):(
                            <IoIosMenu className="text-white text-3xl"/>
                        )}
                </button>
            </div>
        </div>
    )
}

export default Navbar;