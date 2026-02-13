import PartHeroSection from "../../components/heroSection";
import images from "../../constant/images/images";
import Story from "./partials/Story";

const ContentAbout = () => {
    return (
        <>
            <PartHeroSection img={images.carousel2} title="ABOUT"/>
            <Story/>
        </>
    );
};
export default ContentAbout 
