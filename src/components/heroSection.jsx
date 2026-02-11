import React from 'react';

const PartHeroSection = ({img,title}) => {
    return (
        <div className='relative w-full h-[50vh]'>
            <img className='w-full h-full object-cover' src={img} alt="" />
            <p className='text-white absolute top-1/2 text-7xl font-bold left-1/2 -translate-1/2'>{title}</p>
        </div>
    );
};

export default PartHeroSection;