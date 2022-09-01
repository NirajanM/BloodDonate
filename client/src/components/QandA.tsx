import React from 'react';

interface IQandAProps {
    question: string;
    answer: string;
}

const QandA: React.FunctionComponent<IQandAProps> = (props) => {
    return (
        <div className='my-12 text-center'>
            <h3 className=' text-lg xl:text-xl text-red-400 font-semibold my-1'>{props.question}</h3>
            <p className='text-sm xl:text-lg'>{props.answer}</p>
        </div>
    );
};

export default QandA;
