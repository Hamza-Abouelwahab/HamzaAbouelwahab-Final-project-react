import React from 'react';
import Btn from './button';

const CardShop = ({img , title , price ,  }) => {
    return (
        <div className={``}>
            <div className={`w-[22vw] h-[70vh]  `} >
                <img className='w-full h-full object-cover' src={img} alt="" />
            </div>
            <div className="">
                <p className='text-black/70'>{title}</p>
                <span className='text-black/70'>{price}</span>
            </div>
        </div>
    );
};

export default CardShop;
