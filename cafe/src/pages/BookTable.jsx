import React, { useState } from 'react';

import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import DateRangeIcon from '@material-ui/icons/DateRange';
import AccessTimeIcon from '@material-ui/icons/AccessTime';

import Header from '../components/Header';
import Footer from '../components/Footer';

function BookTable() {

    const [selectedDate, setSelectedDate] = useState(null);

    return (
        <div className="min-h-full bg-gray-100 font-body">
            <div className="flex flex-col">
                <Header />  
            </div>

            <div className="h-screen bg-gray-100 flex flex-col mt-24 md:mt-40">
                <div className="max-w-md w-full mx-auto">
                    <div className="text-center font-semibold text-xl">
                        Book a Table
                    </div>
                </div>
                <div className="max-w-md w-full mx-auto mt-4 p-5 rounded-md bg-gray-200 border-gray-300">
                    <form action="" className="space-y-6">
                        <div>
                            <label htmlFor="" className="text-sm font-bold text-gray-600 block">Full Name</label>
                            <input type="text" className="w-full p-2 border border-gray-300 rounded mt-1" />
                        </div>
                        <div>
                            <label htmlFor="" className="text-sm font-bold text-gray-600 block">Phone Number</label>
                            <input type="text" className="w-full p-2 border border-gray-300 rounded mt-1" />
                        </div>
                        <div>
                            <label htmlFor="" className="text-sm font-bold text-gray-600 block">Date <span className="float-right"><DateRangeIcon /></span></label>
                            <DatePicker selected={selectedDate} onChange={ date => setSelectedDate(date) } 
                                minDate={new Date()}
                                isClearable
                                className="w-full p-2 border border-gray-300 rounded mt-1" />
                        </div>
                        <div>
                            <label htmlFor="" className="text-sm font-bold text-gray-600 block">Time <span className="float-right"><AccessTimeIcon /></span></label>
                            <DatePicker selected={selectedDate} onChange={ date => setSelectedDate(date) } 
                                minDate={new Date()}
                                isClearable
                                className="w-full p-2 border border-gray-300 rounded mt-1" />
                        </div>

                        <p> <span className="text-red"> Note : </span> We will wait for only 20 minutes for you to come.</p>

                        <div className="text-center">
                            <butoon className="w-full py-2 px-4 transition duration-300 font-bold bg-gray-300 hover:bg-gray-400 rounded-md text-md cursor-pointer">Book</butoon>
                        </div>
                    </form>
                </div>
            </div>

            <Footer />

        </div>
    )
}

export default BookTable;
