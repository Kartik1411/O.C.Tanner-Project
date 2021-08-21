import React from "react";

function MenuItems(props) {
    return (
        <div className="w-full p-5 md:h-1/2 md:p-10 flex justify-center text-center">
            <img className="w-3/5 h-72" src={props.src} alt="food" />
        </div>
		
    );
}

export default MenuItems;