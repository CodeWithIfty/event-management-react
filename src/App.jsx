
import './App.css'
import { Outlet } from "react-router-dom";
import { ComplexNavbar } from './components/Navbar';
import { Footer } from './components/Footer';

function App() {

  return (
    <div className="">
      <ComplexNavbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default App
