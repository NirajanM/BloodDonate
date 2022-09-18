import React from 'react';

interface AboutUsProps {
}

const AboutUs: React.FunctionComponent<AboutUsProps> = (props) => {
    return (
        <div className=' text-center text-md px-1 sm:px-4 md:px-8 py-28 sm:py-36 md:py-48 flex items-center  sm:text-xl md:text-2xl'>
            <header>
                <a className='font-bold ' href="https://www.linkedin.com/in/nirajan-malla-36a111210/">Nirajan Malla</a>, a web-developer started this as a side project with an objective to help at least one people in need or in other word to create something useful rather than hello world sites. You can find more about him <a className='font-bold' href="https://www.nirajanmalla.com.np">here</a>
            </header>
        </div>
    );
};

export default AboutUs;
