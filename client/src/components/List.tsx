import React, { useState } from 'react';
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

    return (
        <>
            <h1>{requestedGroup}</h1>
            <h2>I will make call on database and show list here later after I do serverside coding and make restful api</h2>
            {console.log(getUsers())}
        </>
    );
};

export default List;
