import React from 'react';
import QandA from './QandA';

const BDC: React.FunctionComponent = () => {
    const arrayOfQandA = [
        {
            question: "Who can donate blood?",
            answer: "Most people who are in good health and feel well can donate blood. There are, however, certain criteria that must be met in order to donate. For example, donors must be at least 17 years old (depends on country), weigh at least 110 pounds, and have not donated blood in the last eight weeks."
        },
        {
            question: "what are the benefits?",
            answer: "There are many benefits of blood donation. It can help to save the lives of others, it can help to improve the health of the donor, and it can also help to promote a sense of community."
        },

        {
            question: "which blood group is universal recipients?",
            answer: "AB+, as the people of this blood group can safely receive transfusion of blood from any blood group."
        },
        {
            question: "which blood group is universal donor?",
            answer: " O-, as the people of this blood group can safely donate blood to people of any blood type. Hospital demands this blood group more."
        },


    ]
    return (
        <section className=' mt-36'>
            <div className='flex flex-col bg-red-400 p-4 lg:p-12 text-white justify-center items-center'>
                <h2 className='font-semibold text-lg xl:text-3xl'>Want to donate blood right away?</h2>
                <span className='text-sm xl:text-xl'>To check redcross branch near you - <a className='cursor-pointer font-bold underline' href="https://nrcs.org/redcross_location/">click here</a></span>
            </div>
            <h2 className=' text-slate-400 font-bold border-b-2 border-t-2 mt-28 mb-4 text-xl xl:text-3xl text-center'>Some common Q&A's</h2>
            <div className='p-8 text-slate-600'>
                {arrayOfQandA.map((arrayData) => {
                    return (
                        <QandA question={arrayData.question} answer={arrayData.answer} />
                    )
                })}
            </div>
        </section>
    );
};

export default BDC;
