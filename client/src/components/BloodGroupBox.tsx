import React from 'react';
import { Link } from "react-router-dom";
interface BloodGroupBoxProps {
    type: string;
}

const BloodGroupBox: React.FunctionComponent<BloodGroupBoxProps> = (props) => {
    return (
        <Link to={`${props.type}`}>
            <span
                className='text-2xl text-white bg-red-400 p-8 m-4 lg:p-12 md:text-3xl md:m-8 h-20 w-20 flex justify-center items-center border rounded-3xl hover:bg-red-600 hover:scale-105'>
                <span>{props.type}</span>
            </span>
        </Link>
    );
};

export default BloodGroupBox;
