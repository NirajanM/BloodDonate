import React from 'react';
import Card from './Card';

const ThreeOptions: React.FunctionComponent = () => {
    const listArray = [{
        goto: "/donor",
        icon: "EmojiPeopleIcon",
        title: "Find a donor",
        description: 'look for a blood donor from available list.'
    },
    {
        goto: "/bloodBank",
        icon: "AccountBalanceIcon",
        title: "Blood bank",
        description: 'check for nearby blood banks.'
    },
    {
        goto: "/redcrossinfo",
        icon: "AddIcon",
        title: "Redcross",
        description: 'check for redcross community around you.'
    }
    ]
    return (<section className='my-4 grid grid-cols-1 lg:grid-cols-3 gap-10 my-16 px-8'>
        {listArray.map((list) => {
            return (
                <Card icon={list.icon} goto={list.goto} title={list.title} description={list.description} />
            );
        })}
    </section>);
};

export default ThreeOptions;
