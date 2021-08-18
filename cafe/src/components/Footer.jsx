import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="bg-gray-200">
            <div className=" max-w-7xl mx-auto py-8 px-4 md:px-44 text-center">
                <h4 className="font-bold text-2xl"> Eat. Enjoy. Repeat. </h4> 
            </div>

            <div className=" max-w-7xl mx-auto py-6 px-4 text-center">
                <div className="flex flex-col ">
                    <Link className=" w-full text-base hover:text-gray-600 font-semibold transition duration-300 cursor-pointer pt-2.5 px-2.5">Contact</Link>
                    <Link className=" w-full text-base hover:text-gray-600 font-semibold transition duration-300 cursor-pointer pt-2.5 px-2.5">About</Link>
                    <Link className=" w-full text-base hover:text-gray-600 font-semibold transition duration-300 cursor-pointer pt-2.5 px-2.5">Privacy Policies</Link>
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
