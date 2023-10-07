import { useEffect, useState } from "react";
import { Service } from "./Service";
import AOS from "aos";
import "aos/dist/aos.css"; // Import the AOS CSS for styling

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of animation (in milliseconds)
    });
  }, []);
  console.log(services);
  return (
    <div data-aos="fade-up" className="container  mx-auto my-8">
      <div className="">
        <h1 className=" text-4xl mt-20 mb-4 font-extrabold text-center">
          It&#39;s simple. You have an event to plan and <br /> we have{" "}
          <span className="text-[#3056D3]"> the solutions</span>
        </h1>
        <p className="text-center text-base text-gray-700 mb-14">
          HERE IS HOW WE CAN HELP YOU
        </p>
      </div>
      <div className="grid lg:grid-cols-3 gap-5 md:grid-cols-2" >
        {services?.map((service) => (
          <Service
            key={service.id}
            id={service.id}
            title={service.title}
            img={service.img}
            description={service.description}
            price={service.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
