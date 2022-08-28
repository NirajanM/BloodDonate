import React from 'react';

interface IQandAProps {
    question: string;
    answer: string;
}

const QandA: React.FunctionComponent<IQandAProps> = (props) => {
    return (
        <div className='my-12'>
            <h3 className='text-xl font-semibold my-1'>{props.question}</h3>
            <p>{props.answer}</p>
        </div>
    );
};

export default QandA;
