import AOS from "aos";
import "aos/dist/aos.css"; // Import the AOS CSS for styling
import { useEffect } from "react";

const Testimonials = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of animation (in milliseconds)
    });
  }, []);
  return (
    <section   id="testimonies" className="py-20 bg-slate-900">
      <div className="max-w-6xl mx-8 md:mx-10 lg:mx-20 xl:mx-auto" >
        {/* Title */}
        <div data-aos="fade-zoom-in" className="transition duration-500 ease-in-out transform scale-100 translate-x-0 translate-y-0 opacity-100">
          <div className="mb-12 space-y-5 md:mb-16 md:text-center">
            <div className="inline-block px-3 py-1 text-sm font-semibold text-white rounded-lg md:text-center text-cn bg-[#202c47]  hover:cursor-pointer hover:bg-opacity-40">
              Words from Others
            </div>
            <h1 className="mb-5 text-3xl font-semibold text-black md:text-center md:text-5xl">
              Its not <span className="text-[#3056D3] "> just us.</span>
            </h1>
            <p className="text-xl text-gray-800 md:text-center md:text-2xl">
              Heres what others have to say about us.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          <ul className="space-y-8 " data-aos="flip-left">
            <li className="text-sm leading-6 ">
              <div className="relative group  ">
                <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                <a
                  href="https://twitter.com/kanyewest"
                  className="cursor-pointer"
                >
                  <div className="relative p-6 space-y-6 leading-none rounded-lg bg-white ring-1 ring-gray-900/5">
                    <div className="flex items-center space-x-4">
                      <img
                        src="https://pbs.twimg.com/profile_images/1276461929934942210/cqNhNk6v_400x400.jpg"
                        className="w-12 h-12 bg-center bg-cover border rounded-full"
                        alt="Kanye West"
                      />
                      <div>
                        <h3 className="text-lg font-semibold text-black">
                          Kanye West
                        </h3>
                        <p className="text-gray-700 text-md">
                          Rapper &amp; Entrepreneur
                        </p>
                      </div>
                    </div>
                    <p className="leading-normal text-black text-md">
                      Find God.
                    </p>
                  </div>
                </a>
              </div>
            </li>

            <li className="text-sm leading-6">
              <div className="relative group">
                <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                <a
                  href="https://twitter.com/tim_cook"
                  className="cursor-pointer"
                >
                  <div className="relative p-6 space-y-6 leading-none rounded-lg bg-white ring-1 ring-gray-900/5">
                    <div className="flex items-center space-x-4">
                      <img
                        src="https://pbs.twimg.com/profile_images/1535420431766671360/Pwq-1eJc_400x400.jpg"
                        className="w-12 h-12 bg-center bg-cover border rounded-full"
                        alt="Tim Cook"
                      />
                      <div>
                        <h3 className="text-lg font-semibold text-black">
                          Tim Cook
                        </h3>
                        <p className="text-gray-500 text-md">CEO of Apple</p>
                      </div>
                    </div>
                    <p className="leading-normal text-black text-md">
                      Diam quis enim lobortis scelerisque fermentum dui faucibus
                      in ornare. Donec pretium vulputate sapien nec sagittis
                      aliquam malesuada bibendum.
                    </p>
                  </div>
                </a>
              </div>
            </li>
          </ul>

          <ul className="hidden space-y-8 sm:block" data-aos="flip-left">
            <li className="text-sm leading-6">
              <div className="relative group">
                <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                <a href="https://twitter.com/paraga" className="cursor-pointer">
                  <div className="relative p-6 space-y-6 leading-none rounded-lg bg-white ring-1 ring-gray-900/5">
                    <div className="flex items-center space-x-4">
                      <img
                        src="https://pbs.twimg.com/profile_images/1375285353146327052/y6jeByyD_400x400.jpg"
                        className="w-12 h-12 bg-center bg-cover border rounded-full"
                        alt="Parag Agrawal"
                      />
                      <div>
                        <h3 className="text-lg font-semibold text-black">
                          Parag Agrawal
                        </h3>
                        <p className="text-gray-500 text-md">CEO of Twitter</p>
                      </div>
                    </div>
                    <p className="leading-normal text-black text-md">
                      Enim neque volutpat ac tincidunt vitae semper. Mattis
                      aliquam faucibus purus in massa tempor. Neque vitae tempus
                      quam pellentesque nec. Turpis cursus in hac habitasse
                      platea dictumst.
                    </p>
                  </div>
                </a>
              </div>
            </li>
            <li className="text-sm leading-6">
              <div className="relative group">
                <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                <a
                  href="https://twitter.com/tim_cook"
                  className="cursor-pointer"
                >
                  <div className="relative p-6 space-y-6 leading-none rounded-lg bg-white ring-1 ring-gray-900/5">
                    <div className="flex items-center space-x-4">
                      <img
                        src="https://pbs.twimg.com/profile_images/1535420431766671360/Pwq-1eJc_400x400.jpg"
                        className="w-12 h-12 bg-center bg-cover border rounded-full"
                        alt="Tim Cook"
                      />
                      <div>
                        <h3 className="text-lg font-semibold text-black">
                          Tim Cook
                        </h3>
                        <p className="text-gray-500 text-md">CEO of Apple</p>
                      </div>
                    </div>
                    <p className="leading-normal text-black text-md">
                      Diam quis enim lobortis scelerisque fermentum dui faucibus
                      in ornare. Donec pretium vulputate sapien nec sagittis
                      aliquam malesuada bibendum.
                    </p>
                  </div>
                </a>
              </div>
            </li>
          </ul>

          <ul className="hidden space-y-8 lg:block" data-aos="flip-left">
            <li className="text-sm leading-6">
              <div className="relative group">
                <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                <a
                  href="https://twitter.com/satyanadella"
                  className="cursor-pointer"
                >
                  <div className="relative p-6 space-y-6 leading-none rounded-lg bg-white ring-1 ring-gray-900/5">
                    <div className="flex items-center space-x-4">
                      <img
                        src="https://pbs.twimg.com/profile_images/1221837516816306177/_Ld4un5A_400x400.jpg"
                        className="w-12 h-12 bg-center bg-cover border rounded-full"
                        alt="Satya Nadella"
                      />
                      <div>
                        <h3 className="text-lg font-semibold text-black">
                          Satya Nadella
                        </h3>
                        <p className="text-gray-500 text-md">
                          CEO of Microsoft
                        </p>
                      </div>
                    </div>
                    <p className="leading-normal text-black text-md">
                      Tortor dignissim convallis aenean et tortor at. At
                      ultrices mi tempus imperdiet nulla malesuada. Id cursus
                      metus aliquam eleifend mi. Quis ipsum suspendisse ultrices
                      gravida dictum fusce ut.
                    </p>
                  </div>
                </a>
              </div>
            </li>
            <li className="text-sm leading-6">
              <div className="relative group">
                <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                <a
                  href="https://twitter.com/dan_schulman"
                  className="cursor-pointer"
                >
                  <div className="relative p-6 space-y-6 leading-none rounded-lg bg-white ring-1 ring-gray-900/5">
                    <div className="flex items-center space-x-4">
                      <img
                        src="https://pbs.twimg.com/profile_images/516916920482672641/3jCeLgFb_400x400.jpeg"
                        className="w-12 h-12 bg-center bg-cover border rounded-full"
                        alt="Dan Schulman"
                      />
                      <div>
                        <h3 className="text-lg font-semibold text-black">
                          Dan Schulman
                        </h3>
                        <p className="text-gray-500 text-md">CEO of PayPal</p>
                      </div>
                    </div>
                    <p className="leading-normal text-black text-md">
                      Quam pellentesque nec nam aliquam sem et tortor consequat
                      id. Enim sit amet venenatis urna cursus.
                    </p>
                  </div>
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
