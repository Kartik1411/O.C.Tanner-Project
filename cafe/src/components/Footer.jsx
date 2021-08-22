import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="bg-gray-200 font-serif">
            <div className=" max-w-7xl mx-auto py-8 px-4 md:px-44 text-center">
                <h4 className="font-bold text-2xl text-red-900"> Eat. Enjoy. Repeat. </h4> 
            </div>

            <div className=" max-w-7xl mx-auto py-4 px-4 text-center">
                <div className="flex flex-col ">
                    <Link to="/about" className=" w-full text-base hover:text-gray-600 font-semibold transition duration-300 cursor-pointer pt-2.5 px-2.5">About</Link>
                    <Link to="/contact" className=" w-full text-base hover:text-gray-600 font-semibold transition duration-300 cursor-pointer pt-2.5 px-2.5">Contact</Link>
                    <div className="w-full pl-24 pr-24 md:px-96 mt-4 flex flex-row">
                        <Link className=" w-1/3  hover:text-blue-600 font-semibold transition duration-300 cursor-pointer pt-2.5 px-2.5">
                            <span className="text-xl " ><i class="fab fa-facebook-f"></i></span>
                        </Link>
                        <Link className=" w-1/3  hover:text-red-700 font-semibold transition duration-300 cursor-pointer pt-2.5 px-2.5">
                            <span className="text-xl " ><i class="fab fa-instagram"></i></span>
                        </Link>
                        <Link className=" w-1/3  hover:text-red-700 font-semibold transition duration-300 cursor-pointer pt-2.5 px-2.5">
                            <span className="text-xl " ><i class="fab fa-youtube"></i></span>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="w-full max-w-7xl mx-auto py-4  px-2.5 text-center">
                <span className="text-base font-semibold">
                    © Hard Rock Cafe 2021 | All Rights Reserved
                </span>
            </div>
        </footer>
    )
}

export default Footer;
