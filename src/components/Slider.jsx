import { Carousel, Typography, Button } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import conf from "../assets/conf.webp";
import "./slider.css";

export function CarouselWithContent() {
  useEffect(() => {
    AOS.init({
      duration: 800,
    });
    AOS.refresh();
  }, []);

  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  const handleMousemove = (event) => {
    const image = event.currentTarget;
    const { clientX, clientY } = event;

    const transformMatrix = new DOMMatrix(getComputedStyle(image).transform);

    const translateX = (clientX / window.innerWidth - 2) * 20;
    const translateY = (clientY / window.innerHeight - 2) * 20;

    transformMatrix.e = translateX;
    transformMatrix.f = translateY;

    image.style.transform = transformMatrix.toString();
  };

  const handleMouseleave = (event) => {
    const image = event.currentTarget;

    image.style.transform = "none";
  };
  return (
    <Carousel autoplay={true} className="h-[92vh] w-full">
      {services.map(
        (service) => (
          <div
            key={service.id}
            className="relative h-full w-full overflow-hidden "
          >
            <div className=" flex justify-center ">
              <img
                data-aos="fade-up"
                src={conf}
                alt=""
                className="absolute  z-10 image-mousemove-effect hidden lg:block "
                onMouseMove={handleMousemove}
                onMouseLeave={handleMouseleave}
              />
            </div>
            <img
              src={service.img}
              alt="image 2"
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 grid h-full w-full items-center bg-black/60">
              <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32 z-20">
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
                  <Link to={`/service-details/${service.id}`}>
                    <Button size="lg" color="white">
                      Explore
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ),
        []
      )}
    </Carousel>
  );
}
