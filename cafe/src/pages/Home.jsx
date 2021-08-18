import React from 'react';
import Card from '../components/Card';

// popular dishes

import BombaySandwich from '../assets/bombay-sandwich.jpg';
import EggNoodles from '../assets/egg-noodles.jpg';
import FrenchSoup from '../assets/french-soup.jpg';
import FrenchToast from '../assets/french-toast.jpg';
import MeatBalls from '../assets/meatballs.jpg';
import SpiciestBurger from '../assets/spiciest-burger.jpg';

function HomePage() {
    return (
        <div className="flex flex-row flex-wrap py-10 justify-center w-full">
            <h1 className="font-bold text-2xl">Our Most Popular Dishes</h1>
            <Card
                
                src={BombaySandwich} 
                title = "Bombay Sandwich"
                desc = "This is most loved sandwich as its taste is just ummm!!"
            />
            <Card 
                src={EggNoodles} 
                title = "Egg Noodles"
                desc = "This is most loved sandwich as its taste is just ummm!!"
            />
            <Card 
                src={FrenchSoup} 
                title = "French Soup"
                desc = "This is most loved sandwich as its taste is just ummm!!"
            />
            <Card 
                src={FrenchToast} 
                title = "French Toast"
                desc = "This is most loved sandwich as its taste is just ummm!!"
            />
            <Card 
                src={MeatBalls} 
                title = "Meat Balls"
                desc = "This is most loved sandwich as its taste is just ummm!!"
            />
            <Card 
                src={SpiciestBurger} 
                title = "Spiciest Burger"
                desc = "This is most loved sandwich as its taste is just ummm!!"
            />
        </div>
    )
}

export default HomePage;
