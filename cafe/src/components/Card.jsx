import React from 'react'

function Card(props) {
    return (
        <div className="flex flex-wrap py-14 justify-center">
            <div className="w-full md:w-52 lg:w-3/6 xl:4/12 px-2.5 mb-5">
                <div>
                    <img className="w-full h-44" src={props.src} alt="food"/>
                </div>
                <div className="pt-2">
                    <ul>
                        <li className="list-none">
                            <span className="font-bold text-base">
                                {props.title}
                            </span>
                        </li>
                        <li className="list-none">
                            <span className="text-base">
                                {props.desc}
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Card;
