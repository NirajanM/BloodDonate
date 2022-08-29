import * as React from 'react';

interface BloodGroupBoxProps {
    type: string;
}

const BloodGroupBox: React.FunctionComponent<BloodGroupBoxProps> = (props) => {
    return (
        <span className='text-2xl text-white bg-red-400 p-4 m-4 text-center border rounded-lg'>
            {props.type}
        </span>
    );
};

export default BloodGroupBox;
