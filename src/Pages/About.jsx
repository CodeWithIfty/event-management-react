import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const About = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
  return (
    <div className="bg-white py-12" data-aos="flip-left">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-semibold text-center text-gray-800">
          About Us
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          <div className="lg:order-2">
            <img
              src="https://i.ibb.co/drVtvQS/retierment-party.png" // Replace with your image URL
              alt="About Us"
              className="object-cover w-full h-auto"
            />
          </div>
          <div>
            <p className="text-gray-700 text-lg">
              Welcome to Social Event Agency! We are passionate about creating
              memorable and unique social events that leave a lasting
              impression. With years of experience in event planning and
              management, our team is dedicated to turning your vision into a
              reality.
            </p>
            <p className="mt-4 text-gray-700 text-lg">
              Whether it's a wedding, birthday party or any
              other special occasion, we take care of every detail, from
              planning and design to execution. Our goal is to make your event
              stress-free and unforgettable for you and your guests.
            </p>
            <p className="mt-4 text-gray-700 text-lg">
              Contact us today to discuss your event ideas and let us help you
              create a social event that will be talked about for years to come!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
