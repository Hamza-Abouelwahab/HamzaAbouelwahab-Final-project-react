import React from 'react';
import PartHeroSection from '../../components/heroSection';
import images from '../../constant/images/images';
import Featured from './partials/Featured';
import Products from './partials/Products';
import { useAppContext } from '../../context/Context';

const Blog = () => {
            
    return (
        <div>
            <PartHeroSection img={images.carousel3} title="NEWS" />
            <div className="my-15 px-5 flex gap-8">
                <Featured/>
                <Products/>
            </div>
            
        </div>
    );
};

export default Blog;