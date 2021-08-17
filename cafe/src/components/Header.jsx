import React, { useState } from 'react';
import Logo from '../assets/logo.jpg';
import { Link } from 'react-router-dom'

function Header() {

    const [active, setActive] = useState(false);

    const onClick = () => {
        setActive(!active);
    }

    return (
        <header className="bg-red-200 relative ">

            <div className="max-w-7xl mx-auto flex items-center justify-between p-2.5">
                <div className="w-14"> 
                    <img src={Logo} alt="logo" className="w-full rounded-md"/>
                </div>

                <div onClick={onClick}
                    className={`
                        md:hidden uppercase font-semibold
                    `}
                >
                    Menu
                </div>

                <nav className={`${!active && 'hidden'} absolute flex flex-col bg-red-200 top-full w-full left-0 z-20 
                    md:static md:w-auto md:flex-row md:flex
                `}>
                    <ul className="md:flex-row md:flex font-semibold">
                        <li className="list-none md:mr-5">
                            <Link className="flex w-full text-base uppercase hover:text-red-800 cursor-pointer pt-2.5 px-2.5">
                                About Us
                            </Link>
                        </li>

                        <li className="list-none md:mr-5">
                            <Link className="flex w-full text-base uppercase hover:text-red-800 cursor-pointer pt-2.5 px-2.5">  
                                Contact Us
                            </Link>
                        </li>

                        <li className="list-none md:mr-5">
                            <Link className="flex w-full text-base uppercase hover:text-red-800 cursor-pointer pt-2.5 px-2.5">
                                Menu 
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;
