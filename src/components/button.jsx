import React from 'react';

const Btn = ({title = "ADD TO CART"}) => {
    return (
        <div className=''>
            <button className='py-2 px-8 bg-black hover:bg-red-400 text-white rounded-4xl'>{title}</button>
        </div>
    );
};

export default Btn;