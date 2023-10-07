
import ContactFrom from "../components/ContactForm"
import { Footer } from "../components/Footer"
import { ComplexNavbar } from "../components/Navbar"
import Services from "../components/Services"
import { CarouselWithContent } from "../components/Slider"
import Testimonials from "../components/Testimonials"


const Home = () => {
  return (
    <div className="">
      <ComplexNavbar/>
      <CarouselWithContent/>
      <Services/>
      <Testimonials/>
      <div className="">
      <ContactFrom/>
      </div>
      <Footer/>
    </div>
  )
}

export default Home
