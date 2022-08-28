import * as React from 'react';
const currentYear: number = new Date().getFullYear();
const Footer: React.FunctionComponent = () => {
    return (
        <>
            <footer className='container bg-red-400 h-40 text-white flex justify-center items-center'>
                <span>Designed and Developed by <a className='font-bold text-lg' href="https://https://www.linkedin.com/in/nirajan-malla-36a111210/">Nirajan Malla.</a> All rights reserved © {currentYear}.</span>

            </footer>
        </>
    );
};

export default Footer;
