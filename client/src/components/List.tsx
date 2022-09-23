import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
type User = {
    _id: string;
    fname: string;
    mname: string;
    lname: string;
    gender: string;
    blood_group: string;
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
            <div className='grid text-center grid-cols-3'>
                <div>Name</div>
                <div>Gender</div>
                <div>Blood Group</div>
                {bloodDonerList && bloodDonerList.map((userDetail) => {
                    return (
                        <>
                            <div>{userDetail.fname + " " + userDetail.mname + " " + userDetail.lname}</div>
                            <div>{userDetail.gender}</div>
                            <div>{userDetail.blood_group}</div>
                        </>
                    );
                })}
            </div>
        </>
    );
};

export default List;
