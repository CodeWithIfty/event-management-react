import { Carousel, Typography, Button } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; 
 
export function CarouselWithContent() {

  useEffect(() => {
    AOS.init({
      duration: 800, // Duration of animation (in milliseconds)
    });
  }, []);

  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch('/services.json')
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <Carousel autoplay={true}  className="h-[92vh] w-full">

      {
        services.map(service => <div key={service.id} className="relative h-full w-full">
        <img
          src={service.img}
          alt="image 2"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
          <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
              data-aos="fade-down"
            >
              {service.title}
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
              data-aos="fade-down"
            >
              {service.description}
            </Typography>
            <div className="flex gap-2 items-center" data-aos="fade-down">
              <Button size="lg" color="white" >
                Explore
              </Button>
              <p className="text-xl text-white font-bold ml-4">
                ${service.price}
              </p>
            </div>
          </div>
        </div>
      </div> ,[])
      }

  
    </Carousel>
  );
}