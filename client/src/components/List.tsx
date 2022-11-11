import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
type User = {
    _id: string;
    name: string;
    gender: string;
    blood_group: string;
    contact: string;
    address: string;
    email: string;
};

const List: React.FunctionComponent = () => {
    const [bloodDonerList, setBloodDonerList] = useState<User[] | null>(null);
    let { requestedGroup } = useParams();

    async function getUsers() {
        try {
            const { data, status } = await axios.get<User[]>(
                `http://localhost:4000/ninjacoder/${requestedGroup}`,
                {
                    headers: {
                        Accept: 'application/json',
                    },
                },
            );

            const newList: User[] = (data);
            setBloodDonerList(newList);


            console.log('response status is: ', status);

            return data;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.log('error message: ', error.message);
                return error.message;
            } else {
                console.log('unexpected error: ', error);
                return 'An unexpected error occurred';
            }
        }
    }
    useEffect(() => {
        getUsers();
    }, [requestedGroup]);
    return (
        <>
            {bloodDonerList && bloodDonerList.map((userDetail) => {
                return (
                    <>
                        <div className='grid grid-cols-1 justify-items-center items-center'>
                            <span className='text-red-500 lg:text-lg text-center font-semibold p-2'>showing result for : {userDetail.blood_group}</span>
                            <span className='text-slate-400 lg:text-lg text-center font-medium p-2'>(click any and directly ask for their help)</span>
                        </div>
                    </>
                );
            })}
            <div className='md:grid border-y-2 p-2 lg:text-lg font-semibold text-red-600 text-center grid-cols-3 mt-8 gap-y-8 gap-x-2'>
                <span className=''>Name</span>
                <span>Gender</span>
                <span>Address</span>
            </div>

            {bloodDonerList && bloodDonerList.map((userDetail) => {
                return (
                    <>
                        <a href="#" className='grid bg-slate-100 lg:text-lg text-center text-red-900 items-center hover:shadow-lg hover:bg-slate-600 hover:shadow-blue-400/50 hover:text-white rounded-xl p-2 md:grid-cols-3 mt-8 gap-y-8 gap-x-2'>
                            <span >{userDetail.name}</span>
                            <span >{userDetail.gender}</span>
                            <span >{userDetail.address}</span>
                            {/* hover:bg-red-400 hover:text-white */}
                        </a>
                    </>
                );
            })}
        </>
    );
};

export default List;
