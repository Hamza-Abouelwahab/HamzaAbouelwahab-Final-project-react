import { Scale } from "../../../animations/animation";
import images from "../../../constant/images/images";
import { motion } from "motion/react";

const Story = () => {
  return (
    <section className="max-w-full px-5 py-16">
      <div className="flex gap-6 items-center">
        
        
        <div className="w-[30vw] overflow-hidden">
          <motion.img
            variants={Scale} 
            initial='rest'
            whileHover='hover'
            transition='transition'
            src={images.shopy4}
            alt="Our Story"
            className="w-full h-auto object-cover"
          />
        </div>

        
        <div className=" w-[70vw]">
          <h2 className="text-4xl font-light mb-6">Our story</h2>
          
          <p className="text-gray-500 leading-8 text-[17px]">
            Phasellus egestas nisi nisi, lobortis ultricies risus semper nec.
            Vestibulum pharetra ac ante ut pellentesque. Curabitur fringilla
            dolor quis lorem accumsan, vitae molestie urna dapibus.
            Pellentesque porta est ac neque bibendum viverra. Vivamus lobortis
            magna ut interdum laoreet. Donec gravida lorem elit, quis
            condimentum ex semper sit amet. Fusce eget ligula magna. Aliquam
            aliquam imperdiet sodales. Ut fringilla turpis in vehicula
            vehicula. Pellentesque congue ac orci ut gravida. Aliquam erat
            volutpat. Donec iaculis lectus a arcu facilisis, eu sodales lectus
            sagittis. Etiam pellentesque, magna vel dictum rutrum, neque justo
            eleifend elit, vel tincidunt erat arcu ut sem. Sed rutrum, turpis
            ut commodo efficitur, quam velit convallis ipsum, et maximus enim
            ligula ac ligula. Vivamus tristique vulputate ultricies. Sed vitae
            ultrices orci.
          </p>
          <div className="pt-4 flex items-center  justify-center text-gray-500 w-155">
          <p className=" pl-8 w-full">Creativity is just connecting things. When you ask creative people how they did something, they feel a little guilty because they didn't really do it, they just saw something. It seemed obvious to them after a while. <br/> <br /> - Steve Job’s</p>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Story;
