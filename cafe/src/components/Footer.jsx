import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="bg-gray-200">

            <div className=" max-w-7xl mx-auto py-10 px-4 md:px-44 text-center">
                <h4 className="font-bold text-2xl"> Eat. Enjoy. Repeat. </h4> 
            </div>
        
            <div className="max-w-7xl mx-auto py-10 px-4 md:px-28 text-center">
                <ul className="md:flex-row w-full font-semibold  md:flex mb-3">
                    <li className="flex w-full justify-self-auto">
                        <Link className="flex w-full hover:text-gray-800 transition duration-300 cursor-pointer mr-12">
                            Contact
                        </Link>
                    </li>
                    <li className="flex w-full">
                        <Link className="flex w-full hover:text-gray-800 transition duration-300 cursor-pointer mr-12">
                            About
                        </Link>
                    </li>
                    <li className="flex w-full">
                        <Link className="flex w-full hover:text-gray-800 transition duration-300 cursor-pointer mr-12">
                            Privacy Policies
                        </Link>
                    </li>
                </ul>
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
