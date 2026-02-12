import PartHeroSection from "../../components/heroSection";
import images from "../../constant/images/images";

const ContactSection = () => {
  return (
    <>
        <PartHeroSection img={images.carousel3} title="CONTACT"/>
    <section className="text-gray-600 body-font relative">
      <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
        
        
        <div className="lg:w-2/3 md:w-1/2   rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            className="absolute inset-0"
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13296.905179456542!2d-7.566533189314673!3d33.573473271670245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7ccce2d212dd9%3A0x2814a9d3a949cc37!2sBournazel%2C%20Casablanca%2020250!5e0!3m2!1sen!2sma!4v1770908934191!5m2!1sen!2sma"
          />

         
        </div>

        
        <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
            Send us your message
          </h2>


          <div className="relative my-4">
            
            <input
              type="text"
              id="name"
              name="name"
              placeholder="name"
              className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
          </div>

          <div className="relative mb-4">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
          </div>

          <div className="relative mb-4">

            <textarea
              id="message"
              name="message"
              placeholder="Message"
              className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              />
          </div>
            <div className="">

          <button className="text-white bg-black border-0 rounded-full py-2 px-12 transition duration-500 cursor-pointer focus:outline-none hover:bg-red-400  text-lg">
            Send
          </button>
            </div>

        </div>

      </div>
    </section>
        </>
  );
};

export default ContactSection;
