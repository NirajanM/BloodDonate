import React from 'react';
import { Link } from 'react-router-dom';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AddLocationIcon from '@mui/icons-material/AddLocation';
interface CardProps {
    icon: string;
    goto: string;
    title: string;
    description: string;
}

const Icon = (name: string) => {
    if (name === 'EmojiPeopleIcon')
        return <EmojiPeopleIcon />
    else if (name === 'AccountBalanceIcon')
        return <AccountBalanceIcon />
    else if (name === 'AddIcon')
        return <AddLocationIcon />


}

const Card: React.FunctionComponent<CardProps> = (props) => {
    return (<Link to={props.goto}>
        <div className='border-4 cursor-pointer hover:scale-105 hover:shadow-lg hover:shadow-red-400/50 rounded-lg'>
            <div className='bg-red-400 hover:bg-red-500 text-white font-semibold text-center p-4 text-lg xl:text-xl 2xl:text-2xl'>
                <h2 className='flex justify-center items-center'><>{Icon(props.icon)}<span className='pl-1'>{props.title}</span></></h2>
            </div>
            <div className=' text-center text-slate-500  p-8'>
                <h3>{props.description}</h3>
            </div>
        </div>
    </Link>
    );
};

export default Card;

