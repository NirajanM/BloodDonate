import React from 'react';
import BloodGroupBox from './BloodGroupBox';
import { Routes, Route, Link } from "react-router-dom";
import List from './List'



const FindDonor: React.FunctionComponent = () => {

  const BloodGroups = [
    {
      type: "A+"
    },
    {
      type: "A-"
    },
    {
      type: "B+"
    },
    {
      type: "B-"
    },
    {
      type: "AB+"
    },
    {
      type: "AB-"
    },
    {
      type: "O+"
    },
    {
      type: "O-"
    }
  ]



  // container bg-red-400 text-white text-lg rounded-lg font-semibold p-4
  return (
    <div className='border-4 md:m-4 m-12 py-8 rounded-lg'>
      <div className='flex justify-center'>
        <Link className='text-white bg-red-400 hover:bg-red-600 hover:scale-110 rounded-lg border-2 text-lg px-4 mb-4' to="/">
          Go back
        </Link>
      </div>
      <h3 className='text-slate-500 px-4 font-bold text-kg md:text-2xl xl:text-3xl text-center mb-4'>Choose your blood group:</h3>
      <div className='grid grid-cols-2 sm:grid-cols-4 place-items-center lg:px-4 md:grid-cols-8 lg:gap-8 xl:mx-4 2xl:mx-8'>
        {BloodGroups.map((bloodGroup) => {
          return (
            <BloodGroupBox type={bloodGroup.type} />
          );
        })}
      </div>
      <Routes>
        <Route path=':requestedGroup' element={<List />} />
      </Routes>
    </div>
  );
};

export default FindDonor;
