import * as React from 'react';

interface BloodGroupBoxProps {
    type: string;
}

const BloodGroupBox: React.FunctionComponent<BloodGroupBoxProps> = (props) => {
    return (

        <span className='text-2xl text-white bg-red-400 p-8 m-4 lg:p-12 md:text-3xl md:m-8 h-20 w-20 flex justify-center items-center border rounded-3xl'>
            <span>{props.type}</span>
        </span>
    );
};

export default BloodGroupBox;
