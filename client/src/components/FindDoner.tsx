import React from 'react';
import BloodGroupBox from './BloodGroupBox';


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

  return (
    <div className='border-4 py-8 rounded-lg'>
      <h3 className='container bg-red-400 text-white text-lg font-semibold p-4'>Choose your blood group:</h3>
      <div className='grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-8 lg:gap-8'>
        {BloodGroups.map((bloodGroup) => {
          return (
            <BloodGroupBox type={bloodGroup.type} />
          );
        })}
      </div>
    </div>
  );
};

export default FindDonor;
