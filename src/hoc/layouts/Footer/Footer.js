import React from 'react';
import Input from "../../../UI/Input/Input";
import Button from "../../../UI/Button/Button";

const Footer = () => {
    return (
        <div className="mt-6 py-6 border-t-2 border-gray-200 text-center text-green-700 bg-white w-full">
            <div className='md:mx-auto max-w-6xl w-full md:flex'>

                <div className="block md:w-1/2 md:px-3 lg:px-6 max-w-md w-full px-2 mx-auto">

                    <h3 className="text-sm md:text-base">
                        Suscribe to <span className="font-semibold">Guest Management</span>
                    </h3>
                    <p className="mt-3 text-xs mb-3 md:text-sm">
                        Benefit from the news of our platform as well as new and updated courses and training
                    </p>
                    <div className="flex justify-center">
                        <Input
                            className="border border-green-700 max-w-lg w-full p-1 rounded-md mr-3 bg-transparent placeholder-green-600 text-sm"
                            placeholder="Email Address"
                        />
                        <Button className="text-white text-xs rounded bg-green-700 max-w-md w-full">
                            Subscribe
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;