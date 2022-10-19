import React from 'react';
import { Link } from "react-router-dom";
interface AboutUsProps {
}

const AboutUs: React.FunctionComponent<AboutUsProps> = (props) => {
    return (
        <div className=' text-center text-md px-4 sm:px-4 md:px-8 py-28 sm:py-36 md:py-48 flex-row item-center sm:text-xl md:text-2xl'>
            <header>
                This site was created to provide genuine service to public for free so that risk of death from scarcity of blood of certain group can be reduced to minimum and now it's your turn to be someone's real-life hero. Register and participate in this life saving program and tell your friend and family to register because the more data we have, the more people can be rescued in time.
            </header>
            <Link to="/register">
                <button className='p-1 px-4 bg-red-500 text-white border-4 cursor-pointer hover:scale-105 hover:shadow-lg hover:bg-red-600 hover:shadow-red-400/50 rounded-lg my-8'>register</button>
            </Link>
            <div className='text-sm text-slate-500 sm:text-md md:text-lg'><a className='font-bold hover:text-black' href="https://www.linkedin.com/in/nirajan-malla-36a111210/">Nirajan Malla</a>, a web-developer created this website as a side project with an objective of helping people in need. You can find more about him <a className='font-bold hover:text-black' href="https://www.nirajanmalla.com.np">here</a>. </div>
        </div>
    );
};

export default AboutUs;
