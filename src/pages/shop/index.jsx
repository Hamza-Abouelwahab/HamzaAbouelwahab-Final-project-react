import React from 'react';
import PartHeroSection from '../../components/heroSection';
import images from '../../constant/images/images';
import Filte from './partials/filte';

const Shop = () => {
    return (
        <>
            <PartHeroSection img={images.bannerWebp} title="Products"/>
            <div className="mt-10 w-full border-2 px-5">
            <Filte/>
            
            </div>
        </>
    );
};

export default Shop;