import { useEffect, useState } from "react";
import { Service } from "./Service";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch('/services.json')
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  console.log(services);
  return (
    <div className="container  mx-auto my-8">
      <div className="grid grid-cols-3 gap-5">
        {services?.map((service) => (
          <Service
            key={service.id}
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
