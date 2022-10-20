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
            <div className='md:grid bg-slate-50 p-2 lg:text-lg font-semibold text-red-600 text-center grid-cols-3 mt-8 gap-y-8 gap-x-2'>
                <span className=''>Name</span>
                <span>Gender</span>
                <span>Blood Group</span>
            </div>

            {bloodDonerList && bloodDonerList.map((userDetail) => {
                return (
                    <>
                        <div className='grid bg-slate-100 lg:text-lg text-center items-center p-2 md:grid-cols-3 mt-8 gap-y-8 gap-x-2'>
                            <span className='align-middle'>{userDetail.name}</span>
                            <span>{userDetail.gender}</span>
                            <span className='m-1 block rounded-xl bg-slate-200 py-1 px-3 hover:bg-red-400 hover:text-white'>{userDetail.address}</span>
                        </div>
                    </>
                );
            })}
        </>
    );
};

export default List;
