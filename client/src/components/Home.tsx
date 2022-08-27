import * as React from 'react';
import Background from '../img/donateBlood.png'
interface IHomeProps {
}

const Home: React.FunctionComponent<IHomeProps> = (props) => {
    return (
        <div className='container'>
            <div className="container flex flex-col lg:flex-row justify-around">
                <div className='text-left text-slate-600 py-10 sm:py-20 md:py-28 lg:py-40 text-3xl font-bold md:text-4xl lg:text-5xl px-4'>
                    <h1>The gift of blood is a gift to someone’s life.</h1>
                </div>
                <div
                    className='bg-contain bg-center bg-no-repeat lg:w-7/12'
                    style={{
                        backgroundImage: `url(${Background})`
                    }}
                ></div>
            </div>

        </div>
    );
};

export default Home;
