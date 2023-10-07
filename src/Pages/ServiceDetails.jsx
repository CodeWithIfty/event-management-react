import { useLoaderData, useParams } from "react-router-dom";

const ServiceDetails = () => {
  const { id } = useParams();
  const idInt = parseInt(id);
  const services = useLoaderData();

  const service = services.find((service) => service.id === idInt);
  console.log(service);
  const { title, price, description,img } = service;

  console.log(services);
  return (
    <div className="container mx-auto">
      <div className={` bg-[url(${img})] h-96  my-10 shadow-lg rounded-lg `}>
        <div className="w-full bg-black h-full bg-opacity-50  hover:bg-opacity-30 duration-500 flex items-center justify-center rounded-lg flex-col">
          <h1 className="text-4xl w-1/2 mb-3 text-center font-bold text-white">
            {title}
          </h1>
          <button className="btn btn-primary ">Reserve</button>
        </div>
      </div>
      <div className=" mb-20">
        <div className=" flex justify-between  mb-5">
          <h1 className="text-2xl font-bold">{title}</h1>
          <h1 className="text-2xl font-bold">${price}</h1>
        </div>
        <p className="mb-6 text-justify">
          {description}
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet
          saepe placeat sunt eligendi est recusandae quas dolore dolor,
          accusamus, maxime ab, magnam ipsam earum reiciendis. Quisquam tenetur
          aspernatur itaque, culpa eligendi ipsam sapiente quidem cum fuga
          voluptatem! Fugit debitis iste sit voluptatibus quis tempore adipisci
          voluptas, eum consectetur nemo eos dolores quibusdam repudiandae
          sapiente magni vel sint, necessitatibus, dolorem ratione sed. Odio
          vitae dolores pariatur vel repellat animi minus ducimus perspiciatis
          debitis nemo veniam rerum aspernatur quasi est porro, alias nihil,
          illum labore officiis nam? Corporis ratione repudiandae quis eveniet
          aliquid. Optio enim eos aliquid dolorem sequi, rerum provident. Fugit!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet
          saepe placeat sunt eligendi est recusandae quas dolore dolor,
          accusamus, maxime ab, magnam ipsam earum reiciendis. Quisquam tenetur
          aspernatur itaque, culpa eligendi ipsam sapiente quidem cum fuga
          voluptatem! Fugit debitis iste sit voluptatibus quis tempore adipisci
          voluptas, eum consectetur nemo eos dolores quibusdam repudiandae
          sapiente magni vel sint, necessitatibus, dolorem ratione sed. Odio
          vitae dolores pariatur vel repellat animi minus ducimus perspiciatis
          debitis nemo veniam rerum aspernatur quasi est porro, alias nihil,
          illum labore officiis nam? Corporis ratione repudiandae quis eveniet
          aliquid. Optio enim eos aliquid dolorem sequi, rerum provident. Fugit!
        </p>
      </div>
    </div>
  );
};

export default ServiceDetails;
