import * as React from 'react';

interface IHomeProps {
}

const Home: React.FunctionComponent<IHomeProps> = (props) => {
    return (
        <div className='container h-screen text-center'>
            this is home page
        </div>
    );
};

export default Home;
