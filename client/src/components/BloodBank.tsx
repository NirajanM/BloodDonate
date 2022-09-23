import React, { useEffect, useState } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import axios from 'axios';
interface IBLoodBankProps {
}
type tBloodBank = {
    _id: string;
    name: string;
    address: string;
    contact: [
        string
    ];
};
const BloodBank: React.FunctionComponent<IBLoodBankProps> = (props) => {
    const [bloodBank, setBloodBank] = useState<tBloodBank[] | null>(null);
    async function getBloodBank() {
        try {
            const { data, status } = await axios.get<tBloodBank[]>(
                "http://localhost:4000/daiheroxa",
                {
                    headers: {
                        Accept: 'application/json',
                    },
                },
            );
            const receivedData: tBloodBank[] = (data);
            setBloodBank(receivedData);
            console.log('response status is: ', status);

        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.log('error message: ', error.message);
                return error.message;
            } else {
                console.log('unexpected error: ', error);
                return 'An unexpected error occurred';
            }
        }
    };
    useEffect(() => {
        getBloodBank();
    }, []);
    return (
        <div className='border-t-4 border-b-4 md:m-4 py-8'>
            <div className='flex justify-center'>
                <Link className='text-white bg-red-400 hover:bg-red-600 hover:scale-110 rounded-lg border-2 text-lg px-4 mb-4' to="/">
                    Go back
                </Link>
            </div>
            <div className='bg-red-400 p-4 text-white flex justify-center text-xs md:text-sm xl:text-md'>
                <div className='w-full lg:w-1/2'>
                    <div className="relative">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                        </svg>
                        <input
                            type="text"
                            placeholder="location"
                            className="w-full py-3 pl-12 pr-4 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600"
                        />
                    </div>
                </div>
            </div>
            <div className='grid md:grid-cols-3 mt-8 gap-y-8 gap-x-2'>
                {bloodBank?.map((bank) => {
                    return (
                        <>
                            <span>{bank.name}</span>
                            <span>{bank.address}</span>
                            <span>{bank.contact.join()}</span>
                        </>
                    );
                })}
            </div>
        </div>
    );
};

export default BloodBank;

