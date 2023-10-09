import { useLoaderData, useParams } from "react-router-dom";

const ServiceDetails = () => {
  const { id } = useParams();
  const idInt = parseInt(id);
  const services = useLoaderData();

  const service = services.find((service) => service.id === idInt);
  const { title, price, description, img } = service;

  const divStyle = {
    backgroundImage: `url(${img})`,
  };
  return (
    <div className="container mx-auto">
      <div style={divStyle} className=" h-96  my-10 shadow-lg rounded-lg mx-2">
        <div className="w-full bg-black h-full bg-opacity-50  hover:bg-opacity-30 duration-500 flex items-center justify-center rounded-lg flex-col">
          <h1 className="text-4xl w-1/2 mb-3 text-center font-bold text-white">
            {title}
          </h1>
          <button className="btn btn-primary ">Reserve</button>
        </div>
      </div>
      <div className=" mb-20 mx-4">
        <div className=" flex justify-between  mb-5">
          <h1 className="text-2xl font-bold">{title}</h1>
          <h1 className="text-2xl font-bold">${price}</h1>
        </div>
        <p className="mb-6 text-justify ">
          {description}A wedding event is a momentous and deeply meaningful
          celebration of love, commitment, and the coming together of two
          individuals in matrimony. It is a joyous occasion where families and
          friends gather to witness and celebrate the union of a couple in love.
          Weddings come in various styles and sizes, ranging from intimate
          ceremonies in backyard gardens to lavish affairs in grand ballrooms or
          picturesque destination settings. Each wedding is a reflection of the
          couples unique love story and personal preferences, making it a truly
          one-of-a-kind event.
        </p>
        <p>
          In addition to the emotional and cultural significance, weddings
          involve meticulous planning and coordination. Couples, often with the
          assistance of wedding planners or event management agencies,
          meticulously plan every detail, from selecting the perfect wedding
          dress and designing the decor to choosing a menu that delights the
          palate. The logistics of guest accommodations, transportation, and
          seating arrangements are equally important to ensure that the day runs
          smoothly.
        </p>
      </div>
    </div>
  );
};

export default ServiceDetails;
