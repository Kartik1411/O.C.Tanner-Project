import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import OfferCards from '../components/OfferCards'

import Offer from '../assets/offer.jpg';

function Offers() {
    return (
        <div className="min-h-full bg-gray-100 font-body">
            <div className="flex flex-col">
                <Header />  
            </div>

            <div style={{backgroundImage : `url(${Offer})`}}
                className="relative flex items-center justify-center h-screen bg-cover bg-center bg-fixed bg-no-repeat" 
            >
                <h1 className="relative px-2.5 z-10 text-center text-xl font-serif md:text-5xl text-gray-300 ">Offers for you!</h1>
                <span className="text-5xl">|</span>
                <p className="relative px-2.5 z-10 text-center text-xl font-serif md:text-5xl text-red-300"> Explore top deals and offers exclusively for you!</p>
                <div className="z-0 absolute -top-0 -left-0 h-full w-full bg-black opacity-70">
                </div>
            </div>

            <h1 className="font-bold text-2xl text-center mt-6 mb-6">Available Offers for You</h1>
			<div className="md:grid md:grid-flow-row md:grid-cols-3 md:grid-rows-4 md:gap-2 flex flex-col">
                <OfferCards title="Get 20% discount using Kotak Bank Cards"/>
                <OfferCards title="Get 20% discount using Kotak Bank Cards"/>
                <OfferCards title="Get 20% discount using Kotak Bank Cards"/>
                <OfferCards title="Get 15% discount using Citi Bank Cards"/>
                <OfferCards title="Get 20% discount using Kotak Bank Cards"/>
                <OfferCards title="Get 20% discount using Kotak Bank Cards"/>
                <OfferCards title="Get 20% discount using RuPay Platinum Debit Cards"/>
                <OfferCards title="Get 20% discount using Kotak Bank Cards"/>
                <OfferCards title="Get 20% discount using Kotak Bank Cards"/>
                <OfferCards title="Get 15% discount using ICICI Bank Net Banking"/>
                <OfferCards title="Get 20% discount using Kotak Bank Cards"/>
                <OfferCards title="Get 40% discount using Axis Bank MyZone Credit Cards"/>
            </div>

            <Footer />
        </div>
    )
}

export default Offers
