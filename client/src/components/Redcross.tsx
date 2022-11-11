import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import axios from 'axios';

interface IRequestsProps {

}

type tRedcross = {
    _id: string;
    Name: string;
    Province: string;
    District: string;
    Address: string;
    Phone: [string];
    Fax?: [string];
    Email?: [string];
}

const Redcross: React.FunctionComponent<IRequestsProps> = (props) => {
    const [redcross, setRedcross] = useState<tRedcross[] | null>(null);
    const [search, setSearch] = useState<string>("");
    const [foundBanks, setFoundBanks] = useState<tRedcross[] | null>(null);
    async function getBloodBank() {
        try {
            const { data, status } = await axios.get<tRedcross[]>(
                "http://localhost:4000/redcrossinfo",
                {
                    headers: {
                        Accept: 'application/json',
                    },
                },
            );
            const receivedData: tRedcross[] = (data);
            setRedcross(receivedData);
            setFoundBanks(receivedData);
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

    useEffect(() => {
        let filtered: tRedcross[] | null = [];
        filtered = redcross && redcross.filter((item) => { return item.Address.toLowerCase().includes(search.toLowerCase()) });
        setFoundBanks(filtered);
        console.log(foundBanks);
    }, [search]);

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
                            value={search}
                            onChange={(e: React.FormEvent<HTMLInputElement>) => {
                                setSearch(e.currentTarget.value);
                            }}
                        />
                    </div>
                </div>
            </div>
            <div >
                {
                    (foundBanks?.length === 0) ? <p className='block bg-slate-100 text-center p-2 mt-8 '>No data found...</p> : null
                }
                <div className='grid grid-cols-1 md:grid-cols-3'>
                    {foundBanks?.map((bank) => {
                        return (
                            <>
                                <div className='flex flex-col p-8'>
                                    <span className='font-semibold text-lg'>{bank.Name}</span>
                                    <span>address:{bank.Address}</span>
                                    <span>province:{bank.Province}</span>
                                    <span>District:{bank.District}</span>
                                    <span>Phone:{bank.Phone.map((num) => { return (<a href={"tel:" + num} ><span className='m-1 block rounded-xl bg-slate-200 py-1 px-3 hover:bg-red-400 hover:text-white'>{num}</span></a>) })}</span>
                                    <span>{bank.Fax?.map((num) => { return (<a href={"tel:" + num} ><span className='m-1 block rounded-xl bg-slate-200 py-1 px-3 hover:bg-red-400 hover:text-white'>{num}</span></a>) })}</span>
                                    <span>{bank.Email?.map((num) => { return (<a href={"mailto:" + num} ><span className='m-1 block rounded-xl bg-slate-200 py-1 px-3 hover:bg-red-400 hover:text-white'>{num}</span></a>) })}</span>
                                </div>
                            </>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Redcross;

