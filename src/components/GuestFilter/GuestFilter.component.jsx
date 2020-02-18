import React, {useContext} from 'react';
import {GuestContext} from "../../context/guestContext/guestContext";

const GuestFilter = () => {

    const {toggleGuest} = useContext(GuestContext);

    return (
        <div className="toggle-section pr-64 pt-4">
            <div className="flex items-center justify-center w-full mb-24">

                <label
                    htmlFor="toogleA"
                    className="flex items-center cursor-pointer"
                >
                    <div className="relative">
                        <input id="toogleA"
                               type="checkbox"
                               className="hidden"
                               onChange={()=> { toggleGuest() }}
                        />
                        <div
                            className="toggle__line w-8 h-4 bg-gray-400 rounded-full shadow-inner"
                        >
                        </div>
                        <div
                            className="toggle__dot absolute w-4 h-6 bg-white rounded-full shadow inset-y-0 left-0"
                        >
                        </div>
                    </div>
                    <div
                        className="ml-3 text-gray-600 font-light text-md"
                    >
                        Show Attending only
                    </div>
                </label>
            </div>
        </div>
    );
};

export default GuestFilter;