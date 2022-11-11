import React, { useState } from 'react';
import axios from 'axios';
import { type } from '@testing-library/user-event/dist/type';

interface IRegisterProps {
}

type tRegister = {
    name: string;
    gender: string;
    blood_group: string;
    contact: string;
    address: string;
    email: string;
}

const Register: React.FunctionComponent<IRegisterProps> = (props) => {
    const [focusedAddress, setFocusedAddress] = useState<boolean>(false);
    const [name, setName] = useState<string>("");
    const [gender, setGender] = useState<string>("");
    const [bloodGroup, setBloodGroup] = useState<string>("");
    const [contact, setContact] = useState<string>("");
    const [address, setAddress] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [birthYear, setBirthYear] = useState<string>("");
    const [notice, setNotice] = useState<boolean>(false);

    const sendData = () => {
        axios.post<tRegister>(
            "http://localhost:4000/recorduser",
            { name, gender, blood_group: bloodGroup, contact, address, email, birthyear: birthYear }, {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        ).then(
            (res) => {
                console.log(res);
                setName("");
                setEmail("");
                setGender("");
                setBloodGroup("");
                setBirthYear("");
                setContact("");
                setAddress("");
                setNotice(true);
                setTimeout(() => {
                    setNotice(false)
                }, 3500);
            });
    }

    return (
        <div className="h-screen flex ">

            <div className="hidden md:flex w-1/2 bg-gradient-to-r from-red-400/30 to-transparent i justify-around items-center">
                <div>
                    <h1 className="text-red-400 font-bold text-4xl font-sans">Register</h1>
                    <p className="text-black mt-1">for a chance to be a real life hero</p>
                    <p className="text-slate-500 mt-1">(we won't disclose your contact or email publicly)</p>
                </div>
            </div>
            <div className="flex w-full md:w-1/2 justify-center items-center">
                <form className='text-center'>
                    <h1 className="text-red-400 font-bold text-2xl mb-1">Please Be Genuine!</h1>
                    <p className="text-sm font-normal text-gray-600 mb-7">we don't want fake details.</p>
                    <input className="border-2 py-2 px-3 rounded-2xl mb-4 block text-center outline-none" type="text"
                        onChange={(e) => {
                            setName(e.target.value);
                        }}
                        value={name}
                        placeholder="your full name" />
                    <label htmlFor="cars">Blood Group: </label>
                    <select className="mb-2" value={bloodGroup} onChange={(e) => { setBloodGroup(e.target.value) }}>
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
                                <input type="radio" id="male" name="gender" value="Male" onClick={() => setGender('Male')} />
                                <label htmlFor="male">Male</label>
                            </div>
                            <div>
                                <input type="radio" id="female" name="gender" value="Female" onClick={() => setGender('Female')} />
                                <label htmlFor="female">Female</label>
                            </div>
                            <div>
                                <input type="radio" id="other" name="gender" value="Other" onClick={() => setGender('Other')} />
                                <label htmlFor="other">Others</label>
                            </div>
                        </div>
                    </div>
                    <input className="border-2 py-2 px-3 rounded-2xl mt-4 block text-center outline-none" type="string" value={birthYear}
                        onChange={e => { setBirthYear(e.target.value) }}
                        placeholder="birthyear in AD" />
                    <input className="border-2 py-2 px-3 rounded-2xl mt-4 block text-center outline-none" type="tel" value={contact} onChange={e => setContact(e.target.value)} placeholder="phone number" />
                    <input
                        onFocus={() => { setFocusedAddress(true) }}
                        onBlur={() => { setFocusedAddress(false) }}
                        className="border-2 py-2 px-3 mt-4 rounded-2xl block text-center outline-none" type="text" value={address} onChange={e => setAddress(e.target.value)} placeholder="your address" />
                    {focusedAddress && <span className='text-sm text-slate-400'>format: devchuli-16,Nawalpur</span>}

                    {notice ? <span>✔ Data Recorded Successfully</span> : null}

                    <button className="block w-full bg-red-400 hover:bg-red-500 mt-4 py-2 rounded-2xl text-white font-semibold mb-2" onClick={(e) => {
                        e.preventDefault();
                        sendData();
                    }}>submit</button>
                </form>
            </div>
        </div>
    );
};

export default Register;
