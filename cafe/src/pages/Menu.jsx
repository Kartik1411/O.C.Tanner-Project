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
        <div className="min-h-full bg-gray-100 font-serif">
            <div className="flex flex-col">
                <Header />  
            </div>

            <Carousel enableAutoPlay autoPlaySpeed="5000" className="p-2 mt-5 md:p-10 h-52 md:h-4/6" breakPoints={breakPoints}>
                <CardCarousel src={BombaySandwich}/>
                <CardCarousel src={EggNoodles} />
                <CardCarousel src={FrenchSoup}/>
                <CardCarousel src={FrenchToast}/>
                <CardCarousel src={MeatBalls}/>
            </Carousel>

            <hr />

            <div className="min-h-full pt-5 bg-gray-50" >
                <h1 className="text-2xl font-bold text-center text-red-900">Menu</h1>
                <h1 className="text-xl font-semibold mt-5 p-5 text-center">Our menu’s full of the good stuff. Whatever your diet or preferences, there’s enough choice for everyone.</h1>

                <div>
                    {/* <h1 className="text-red-900 text-bold text-3xl my-10 ml-5 md:ml-24">Breakfast</h1> */}
                    <div className="md:grid md:grid-flow-row md:grid-cols-2 md:grid-rows-2 flex flex-col">
                        <MenuItems src={BombaySandwich} />
                        <MenuItems src={EggNoodles} />
                        <MenuItems src={EggNoodles} />
                        <MenuItems src={FrenchToast} />
                    </div>
                    
                    <div className=" bg-gray-100 md:grid md:grid-flow-row md:grid-cols-2 md:grid-rows-2 flex flex-col">
                        <MenuItems src={BombaySandwich} />
                        <MenuItems src={EggNoodles} />
                        <MenuItems src={EggNoodles} />
                        <MenuItems src={FrenchToast} />
                    </div>
                    
                    <div className="h-20 mt-16">
                        <p className="text-xl font-semibold text-red-900 text-center">And Many More to Come...</p>
                    </div>
                    
                </div>

            </div>

            <Footer />
        </div>
    )
}

export default Menu;
