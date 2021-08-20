import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import CardCarousel from '../components/CardCarousel';
import Carousel from 'react-elastic-carousel';

import MenuItems from '../components/MenuItems'

import BombaySandwich from '../assets/bombay-sandwich.jpg';
import EggNoodles from '../assets/egg-noodles.jpg';
import FrenchSoup from '../assets/french-soup.jpg';
import FrenchToast from '../assets/french-toast.jpg';
import MeatBalls from '../assets/meatballs.jpg';


function Menu() {

    const breakPoints = [
        {width: 500, itemsToShow: 1},
        {width: 768, itemsToShow: 2},
        {width: 1200, itemsToShow: 3},
        {width: 1500, itemsToShow: 4}
    ]

    return (
        <div className="min-h-full bg-gray-100 font-body">
            <div className="flex flex-col">
                <Header />  
            </div>

            <Carousel enableAutoPlay autoPlaySpeed="5000" className="p-10" breakPoints={breakPoints}>
                <CardCarousel src={BombaySandwich}/>
                <CardCarousel src={EggNoodles} />
                <CardCarousel src={FrenchSoup}/>
                <CardCarousel src={FrenchToast}/>
                <CardCarousel src={MeatBalls}/>
            </Carousel>

            <hr />

            <div className="h-screen pt-5 bg-gray-50" >
                <h1 className="text-2xl font-bold text-center">Menu</h1>
                <h1 className="text-xl font-semibold mt-5 p-5 text-center">Our menu’s full of the good stuff. Whatever your diet or preferences, there’s enough choice for everyone.</h1>

                <div>
                    <h1 className="text-red-900 text-bold text-3xl my-10 ml-5 md:ml-28">Breakfast</h1>
                    <div className="md:grid md:grid-flow-row md:grid-cols-2 md:grid-rows-4 md:gap-2 md:ml-20 text-center ">
                        <MenuItems title="1. Instant Oats Porridge" />
                        <MenuItems title="2. Instant Oats Porridge" />
                        <MenuItems title="3. Instant Oats Porridge" />
                        <MenuItems title="4. Instant Oats Porridge" />
                    </div>
                </div>

            </div>

            <Footer />
        </div>
    )
}

export default Menu;
