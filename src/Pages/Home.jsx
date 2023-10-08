import ContactFrom from "../components/ContactForm";
import Services from "../components/Services";
import { CarouselWithContent } from "../components/Slider";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <div className="">
      <CarouselWithContent />
      <Services name="services" />
      <Testimonials />
      <div className="">
        <ContactFrom />
      </div>
    </div>
  );
};

export default Home;
