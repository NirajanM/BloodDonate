import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
type User = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
};

const List: React.FunctionComponent = () => {
    const [bloodDonerList, setBloodDonerList] = useState<User[] | null>(null);

    async function getUsers() {
        try {
            const { data, status } = await axios.get<User[]>(
                'https://jsonplaceholder.typicode.com/todos',
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

    let { requestedGroup } = useParams();
    return (
        <>
            <h1>{requestedGroup}</h1>
            <h2>I will make call on database and show list here later after I do serverside coding and make restful api</h2>
        </>
    );
};

export default List;
