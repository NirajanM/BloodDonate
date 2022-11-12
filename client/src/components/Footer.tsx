import React from 'react';
import Logo from '../img/highResLogo.png';
import { Link } from 'react-router-dom';
const currentYear: number = new Date().getFullYear();
const Footer: React.FunctionComponent = () => {
    return (
        <>
            <footer className='text-xs sm:text-lg bg-red-400 h-60 text-white flex justify-around flex-col items-center'>
                <Link to='/'>
                    <img className="w-20 sm:w-24" src={Logo} alt="logo" onClick={() => {
                        window.scrollTo({
                            top: 0,
                            behavior: 'smooth'
                        });
                    }} />
                </Link>
                <span>&#60; Designed and Developed by <a className='font-bold' href="https://www.linkedin.com/in/nirajan-malla-36a111210/">Nirajan Malla</a> /&#62;</span>
                <span>© {currentYear}, All rights reserved.</span>
                <span></span>
            </footer>
        </>
    );
};

export default Footer;
