import React from 'react';
import PartHeroSection from '../../components/heroSection';
import images from '../../constant/images/images';
import Filte from './partials/filte';
import Products from './partials/Products';

const Shop = () => {
    return (
        <>
            <PartHeroSection img={images.bannerWebp} title="Products"/>
            <div className="my-10 w-full flex  px-5">
            <Filte/>
            <Products/>
            </div>
        </>
    );
};

export default Shop;