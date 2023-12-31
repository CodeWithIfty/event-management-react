import { Link } from "react-router-dom"

const ErrorPage = () => {
  return (
<div className="lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16">
            <div className="xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0">
                <div className="relative">
                    <div className="absolute">
                        
                    </div>
                    <div>
                        <img src="https://i.ibb.co/G9DC8S0/404-2.png" />
                    </div>
                </div>
                <div className="mt-20">
                            <h1 className="mb-10 text-gray-800 font-bold text-2xl">
                                Sorry! The page you are looking for its Unavailable :(
                            </h1>
                            <Link className="sm:w-full  lg:w-auto  border rounded md py-4 px-8 text-center bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50" to={'/'}>Go to Home</Link>
                        </div>
            </div>
            
            <div>
                <img src="https://i.ibb.co/ck1SGFJ/Group.png" />
            </div>
        </div>
  )
}

export default ErrorPage
