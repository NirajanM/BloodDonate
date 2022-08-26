import * as React from 'react';

interface IAppProps {
}

const Header: React.FunctionComponent<IAppProps> = (props) => {
    return (
        <>
            <header className='container bg-blue-300 text-white'>
                <nav>
                    <ul>
                        <li onClick={() => {

                        }}>Home</li>
                        <li onClick={() => {

                        }}>About Us</li>
                        <li onClick={() => {

                        }}>Contact Us</li>
                    </ul>
                </nav>
            </header>
        </>
    );
};

export default Header;
