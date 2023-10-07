import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; 
import { useEffect } from "react";

export function Service({ id, title, img, description, price }) {
  useEffect(() => {
    AOS.init({
      duration: 500, // Duration of animation (in milliseconds)
    });
  }, []);
  return (
    <Card data-aos="flip-right" className="lg:w-96 shadow-lg flex flex-col justify-between">
      <CardHeader floated={false} color="blue-gray">
        <img src={img} alt="ui/ux review check" />
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
        <IconButton
          size="sm"
          color="red"
          variant="text"
          className="!absolute top-4 right-4 rounded-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-6 w-6"
          >
            <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
          </svg>
        </IconButton>
      </CardHeader>
      <CardBody>
        <div className="mb-2 flex items-center justify-between gap-2">
          <Typography color="blue-gray" className="font-medium text-lg">
            {title}
          </Typography>
          <Typography color="blue-gray" className="font-medium text-xl">
            ${price}
          </Typography>
        </div>
        <p className="text-gray-700">{description}</p>
      </CardBody>
      <CardFooter className="pt-3">
        <Link to={`/service-details/${id}`}>
          <Button size="lg" fullWidth={true} className="bg-[#3056D3]">
            Reserve
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
