import React from 'react';

interface CardProps {
    goto: string;
    title: string;
    description: string;
}

const Card: React.FunctionComponent<CardProps> = (props) => {
    return (
        <div className='border-4 cursor-pointer hover:scale-105 hover:shadow-lg hover:shadow-red-400/50 rounded-lg'>
            <div className='bg-red-400  text-white font-semibold text-center p-4 text-2xl'>
                <h2 >{props.title}</h2>
            </div>
            <div className=' text-center text-slate-500  p-8'>
                <h3>{props.description}</h3>
            </div>
        </div>
    );
};

export default Card;
