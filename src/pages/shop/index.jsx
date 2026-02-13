import React, { useState } from 'react';
import PartHeroSection from '../../components/heroSection';
import images from '../../constant/images/images';
import Filte from './partials/filte';
import Products from './partials/Products';
import data from '../../constant/data';

const Shop = () => {
    const [filteredItems, setFilteredItems] = useState(data);
    const handleSearch = (searchItem) => {
        let result = data.filter((element)=> element.title.toLowerCase().includes(searchItem.toLowerCase()))
        setFilteredItems(result)
    }
    return (
        <>
            <PartHeroSection img={images.bannerWebp} title="Products"/>
            <div className="my-10 w-full flex  px-5">
            <Filte onSearch={handleSearch} />
            <Products items={filteredItems} />
            </div>
        </>
    );
};

export default Shop;