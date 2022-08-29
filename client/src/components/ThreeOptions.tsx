import React from 'react';
import Card from './Card';

const ThreeOptions: React.FunctionComponent = () => {
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
    return (<section className='my-4 grid grid-cols-3 gap-10 my-16 px-8'>
        {listArray.map((list) => {
            return (
                <Card goto={list.goto} title={list.title} description={list.description} />
            );
        })}
    </section>);
};

export default ThreeOptions;
