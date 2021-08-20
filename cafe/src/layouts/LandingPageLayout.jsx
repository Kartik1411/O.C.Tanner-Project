import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';

import Home from '../pages/Home';

// hero image
import Hero from '../assets/hero2.jpg';

function LandingPageLayout(props) {
    return (
        <div className="min-h-full bg-gray-100 font-body">
            <div className="flex flex-col">
                <Header />  
            </div>

            <div style={{backgroundImage : `url(${Hero})`}}
                className="relative flex items-center justify-center h-screen bg-cover bg-center bg-fixed bg-no-repeat" 
            >
                <h1 className="relative px-2.5 z-10 text-center text-2xl font-serif md:text-6xl text-gray-300">{props.message}</h1>

                <div className="z-0 absolute -top-0 -left-0 h-full w-full bg-black opacity-50">
                </div>

            </div>

            <div className="w-full max-w-7xl mx-auto">
                <Home />
            </div>

            <Footer />

        </div>
    )
}

export default LandingPageLayout;

