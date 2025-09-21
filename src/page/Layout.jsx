import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function  Layout(){
    return <div className="bg-Navy-850 min-h-[100vh] text-white">
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
}