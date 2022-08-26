import * as React from 'react';

interface IAppProps {
}

const Header: React.FunctionComponent<IAppProps> = (props) => {
    return (
        <>
            <div className='container max-w-xs bg-black text-white text-center'>
                hello world
            </div>
        </>
    );
};

export default Header;
