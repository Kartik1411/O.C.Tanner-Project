import React from 'react';

function CardCarousel(props) {
    return (
        <div className="w-full h-2/4 m-12 flex justify-center text-center">
            <img className="w-full h-96" src={props.src} alt="food" />
        </div>
    )
}

export default CardCarousel;
