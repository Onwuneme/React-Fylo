import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.svg";
export default function Navbar() {
  const location=useLocation()
  return (
    <>
      <div className=" p-5 md:px-10 flex justify-between max-w-[1500px] mx-auto">
        <Link to={"/"}>
          <img src={logo} alt="" className="w-30" />
        </Link>
        <div className="flex gap-4 md:gap-6 lg:gap-10 text-white font-light text-lg px-5">
          <Link to={"/Feature"} className={`${location.pathname ==="/Feature"?"border-white":"border-transparent" } border-b-3 py-2`}>Features</Link>
          <Link to={"/Team"} className={`${location.pathname ==="/Team"?"border-white":"border-transparent" } border-b-3 py-2`}>Team</Link>
          <button className="py-2">Sign In</button>
        </div>
      </div>
    </>
  );
}
