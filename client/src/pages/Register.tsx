import React, { useState } from 'react';

interface IRegisterProps {
}

const Register: React.FunctionComponent<IRegisterProps> = (props) => {
    const [focusedAddress, setFocusedAddress] = useState<boolean>(false);
    return (
        <div className="h-screen flex ">

            <div className="hidden md:flex w-1/2 bg-gradient-to-r from-red-400/30 to-transparent i justify-around items-center">
                <div>
                    <h1 className="text-red-400 font-bold text-4xl font-sans">Register</h1>
                    <p className="text-black mt-1">for a chance to be a real life hero</p>
                </div>
            </div>
            <div className="flex w-full md:w-1/2 justify-center items-center">
                <form className='text-center'>
                    <h1 className="text-red-400 font-bold text-2xl mb-1">Please Be Genuine!</h1>
                    <p className="text-sm font-normal text-gray-600 mb-7">we don't want fake details</p>
                    <input className="border-2 py-2 px-3 rounded-2xl mb-4 block text-center outline-none" type="text" placeholder="your name" />
                    <label htmlFor="cars">Blood Group: </label>
                    <select className="mb-2" id="cars" name="cars">
                        <option value="A+">A+</option>
                        <option value="A-">A-</option>
                        <option value="B+">B+</option>
                        <option value="B-">B-</option>
                        <option value="AB+">AB+</option>
                        <option value="AB-">AB-</option>
                        <option value="O+">O+</option>
                        <option value="O-">O-</option>
                    </select>

                    <div className='text-gray-600 px-4'>
                        <span>Gender:</span>
                        <div className='flex justify-around'>
                            <div>
                                <input type="radio" id="male" name="gender" value="M" />
                                <label htmlFor="male">M</label>
                            </div>
                            <div>
                                <input type="radio" id="female" name="gender" value="60" />
                                <label htmlFor="female">F</label>
                            </div>
                            <div>
                                <input type="radio" id="other" name="gender" value="60" />
                                <label htmlFor="other">O</label>
                            </div>
                        </div>
                    </div>
                    <input className="border-2 py-2 px-3 rounded-2xl mt-4 block text-center outline-none" type="text" placeholder="birthyear in AD" />
                    <input className="border-2 py-2 px-3 rounded-2xl mt-4 block text-center outline-none" type="tel" placeholder="phone number" />
                    <input
                        onFocus={() => { setFocusedAddress(true) }}
                        onBlur={() => { setFocusedAddress(false) }}
                        className="border-2 py-2 px-3 mt-4 rounded-2xl block text-center outline-none" type="text" placeholder="your address" />
                    {focusedAddress && <span className='text-sm text-slate-400'>format: devchuli-16,Nawalpur</span>}
                    <button type="submit" className="block w-full bg-red-400 hover:bg-red-500 mt-4 py-2 rounded-2xl text-white font-semibold mb-2">submit</button>
                </form>
            </div>
        </div>
    );
};

export default Register;
