import React from 'react';
import Background from '../img/bloodBag.png';
import { Routes, Route } from 'react-router-dom';
import BDC from '../components/BDC';
import ThreeOptions from '../components/ThreeOptions';
import FindDonor from '../components/FindDoner';
interface IHomeProps {
}

const Home: React.FunctionComponent<IHomeProps> = (props) => {

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

            <Routes>
                <Route path="" element={<ThreeOptions />} />
                <Route path='donor/*' element={<FindDonor />} />
            </Routes>
            <BDC />
        </div>
    );
};

export default Home;
