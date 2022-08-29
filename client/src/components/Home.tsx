import React from 'react';
import Background from '../img/bloodBag.png';
import Card from './Card';
import BDC from './BDC';
interface IHomeProps {
}

const Home: React.FunctionComponent<IHomeProps> = (props) => {
    const listArray = [{
        goto: "/donor",
        title: "Find a donor",
        description: 'look for a blood donor from available list.'
    },
    {
        goto: "/bloodBank",
        title: "Blood bank",
        description: 'check for nearby blood banks.'
    },
    {
        goto: "/requests",
        title: "Requests",
        description: 'check for requests from people in need.'
    }
    ]
    return (
        <div className='container'>
            <div className="container flex my-4 justify-around">
                <div className='text-left text-slate-600 py-10 sm:py-20 md:py-28 lg:py-40 text-lg sm:text-3xl font-bold md:text-4xl lg:text-5xl px-4 lg:px-8'>
                    <h1>The gift of blood is a gift to someone’s life.</h1>
                </div>
                <div
                    className='bg-contain bg-center bg-no-repeat w-1/2 sm:w-3/12 md:w-5/12 lg:w-7/12'
                    style={{
                        backgroundImage: `url(${Background})`
                    }}
                ></div>
            </div>
            <section className='my-4 grid grid-cols-3 gap-10 my-16 px-8'>
                {listArray.map((list) => {
                    return (
                        <Card goto={list.goto} title={list.title} description={list.description} />
                    );
                })}
            </section>
            <BDC />
        </div>
    );
};

export default Home;
