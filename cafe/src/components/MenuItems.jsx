import React from "react";

function MenuItems(props) {
    return (
        <div >
            <div className="mt-1 md:ml-10">
				<h2 className="text-semibold text-xl md:w-52">{props.title}</h2>
            </div>
		</div>
    );
}

export default MenuItems;