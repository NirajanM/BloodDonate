import React from 'react';
import { Routes, Route, Link } from "react-router-dom";

interface IRequestsProps {
}

const Requests: React.FunctionComponent<IRequestsProps> = (props) => {
    return (
        <div className='border-4 md:m-4 m-12 py-8 rounded-lg'>
            <div className='flex justify-center'>
                <Link className='text-white bg-red-400 hover:bg-red-600 hover:scale-110 rounded-lg border-2 text-lg px-4 mb-4' to="/">
                    Go back
                </Link>
            </div>

            <Routes>
                <Route path=':requestedGroup' element={<h1>hello</h1>} />
            </Routes>
        </div>
    );
};

export default Requests;

