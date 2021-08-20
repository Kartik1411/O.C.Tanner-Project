import React from "react";

function OfferCards(props) {
    return (
        <div className="border-2 rounded-md p-5 m-5 text-center">
            <div className="mt-1">
				<h2 className="text-semibold text-xl">{props.title}</h2>
            </div>
            <div className="mt-2">
                <button className="bg-gray-200 hover:bg-gray-300 rounded-md border-2 mt-2 p-1.5" >Copy Code</button>
            </div>
		</div>
    );
}

export default OfferCards;
