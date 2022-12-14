import React from 'react';
import Background from '../img/bloodBag.png';
import { Routes, Route } from 'react-router-dom';
import BDC from '../components/BDC';
import ThreeOptions from '../components/ThreeOptions';
import FindDonor from '../components/FindDoner';
import BloodBank from '../components/BloodBank';
import Redcross from '../components/Redcross';
interface IHomeProps {
}

const Home: React.FunctionComponent<IHomeProps> = (props) => {

    return (
        <div >
            <div className=" flex my-4 pr-4 md:pr-0 justify-around">
                <div className='text-left py-10 sm:py-20 md:py-28 lg:py-40 px-8 lg:px-8'>
                    <h1 className='text-slate-600 text-md sm:text-3xl font-bold md:text-4xl lg:text-5xl '>The gift of blood is a gift to someone’s life.</h1>
                </div>
                <div
                    className='bg-contain bg-center bg-no-repeat w-1/3 sm:w-3/12 md:w-5/12 lg:w-7/12'
                    style={{
                        backgroundImage: `url(${Background})`
                    }}
                ></div>
            </div>
            <Routes>
                <Route path="" element={<ThreeOptions />} />
                <Route path='donor/*' element={<FindDonor />} />
                <Route path='bloodBank' element={<BloodBank />} />
                <Route path='redcrossinfo' element={<Redcross />} />
            </Routes>
            <BDC />
        </div>
    );
};

export default Home;
