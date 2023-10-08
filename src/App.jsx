
import './App.css'
import { Outlet } from "react-router-dom";
import { ComplexNavbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <div className="">
      <ComplexNavbar/>
      <Outlet/>
      <Footer/>
      <ToastContainer />
    </div>
  )
}

export default App
