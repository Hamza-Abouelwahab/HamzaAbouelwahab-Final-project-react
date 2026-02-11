import React from 'react';
import PartHeroSection from '../../components/heroSection';
import images from '../../constant/images/images';

const Blog = () => {
    return (
        <div>
            <PartHeroSection img={images.carousel3} title="NEWS" />
        </div>
    );
};

export default Blog;