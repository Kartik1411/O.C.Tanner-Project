import React, { useState } from 'react';
import Logo from '../assets/logo.jpg';
import { Link } from 'react-router-dom';
import NotesIcon from '@material-ui/icons/Notes';
// import AssignmentIcon from '@material-ui/icons/Assignment';
// import BookIcon from '@material-ui/icons/Book';

function Header() {

    const [active, setActive] = useState(false);

    const onClick = () => {
        setActive(!active);
    }

    return (
        <header className="bg-gray-200 relative">

            <div className="max-w-7xl mx-auto flex items-center justify-between p-3">
                <Link to="/">
                    <div className="w-14"> 
                        <img src={Logo} alt="logo" className="w-full rounded-md"/>
                    </div>
                </Link>

                <div onClick={onClick}
                    className={`
                        md:hidden uppercase font-semibold
                    `}
                >
                    <NotesIcon />
                </div>

                <nav className={`${!active && 'hidden'} absolute flex flex-col bg-gray-200 top-full w-full left-0 z-20 
                    md:static md:w-auto md:flex-row md:flex
                `}>
                    <ul className="md:flex-row md:flex font-semibold mb-3">
                        <li className="list-none md:mr-5">
                            <Link to='/offers' className="flex w-full text-base uppercase hover:text-gray-600 transition duration-300 cursor-pointer pt-2.5 px-2.5">
                                offers
                            </Link>
                        </li>

                        {/* <li className="list-none md:mr-5">
                            <Link className="flex w-full text-base uppercase hover:text-gray-500 transition duration-300 cursor-pointer pt-2.5 px-2.5">  
                                Contact Us
                            </Link>
                        </li> */}

                        <li className="list-none md:mr-5">
                            <Link to="/menu" className="flex w-full text-base uppercase hover:text-gray-600 transition duration-300 cursor-pointer pt-2.5 px-2.5">
                                Menu 
                            </Link>
                        </li>

                        <li className="list-none md:mr-5">
                            <Link to="/book-table" className="flex w-full text-base uppercase hover:text-gray-600 transition duration-300 cursor-pointer pt-2.5 px-2.5">
                                Book Table
                            </Link>
                        </li>

                        {/* <li className="list-none md:mr-5">
                            <Link className="flex w-full text-base uppercase hover:text-red-800 cursor-pointer pt-2.5 px-2.5">
                                Cart
                            </Link>
                        </li> */}
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;
