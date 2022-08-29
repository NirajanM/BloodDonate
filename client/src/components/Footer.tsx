import React from 'react';
import Logo from '../img/highResLogo.png';
const currentYear: number = new Date().getFullYear();
const Footer: React.FunctionComponent = () => {
    return (
        <>
            <footer className='text-xs sm:text-lg container bg-red-400 h-60 text-white flex justify-around flex-col items-center'>
                <img className="w-20 sm:w-24" src={Logo} alt="logo" />
                <span>Designed and Developed by <a className='font-bold' href="https://https://www.linkedin.com/in/nirajan-malla-36a111210/">Nirajan Malla.</a></span>
                <span>© {currentYear}, All rights reserved.</span>
                <div></div>
            </footer>
        </>
    );
};

export default Footer;
