import { useState } from "react";
import { TiSocialFacebook } from "react-icons/ti";
import { IoLogoTwitter } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import logo from "../assets/logo.svg";
import locationIcon from "../assets/icon-location.svg";
import phoneIcon from "../assets/icon-phone.svg";
import emailIcon from "../assets/icon-email.svg";
import { Link } from "react-router-dom";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setError("Please enter your email");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email");
    } else {
      setError("");
      console.log("Subscribed:", email);
      setEmail("");
    }
  };

  return (
    <div className="bg-Navy-900 text-white max-w-[1500px] mx-auto">
      {/* ====== Signup Form ====== */}
      <div className="px-5">
        <form
          onSubmit={handleSubmit}
          className="relative -bottom-30 space-y-5 p-8 md:p-10 max-w-[700px] mx-auto 
                     text-center  bg-Navy-850/40 backdrop-blur-md rounded-2xl shadow-lg"
        >
          <div className="space-y-2">
            <h1 className="text-2xl font-bold">Get early access today</h1>
            <p className="text-neutral-300 text-sm md:text-base">
              It only takes a minute to sign up and our free starter tier is
              extremely generous. If you have any questions, our support team
              would be happy to help you.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-5 md:items-center">
            <div>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                placeholder="email@example.com"
                className="bg-white w-full md:w-[400px] py-3 pl-5 rounded-full 
                         text-black outline-none focus:ring-2 focus:ring-cyan-400"
              />
              {error && (
                <p className="text-red-400 text-sm text-start">{error}</p>
              )}
            </div>
            <button
              type="submit"
              className="w-full md:w-fit py-3 px-6 rounded-full 
                         bg-gradient-to-r from-cyan-300 to-cyan-500 hover:opacity-90"
            >
              Get Started For Free
            </button>
          </div>
        </form>
      </div>

      {/* ====== Footer Grid ====== */}
      <footer
        className="bg-Navy-950 px-6 pt-40 pb-12 grid gap-10 
                   md:grid-cols-2 lg:grid-cols-5 lg:gap-14  mx-auto"
      >
        {/* Logo */}
        <div className="col-span-full mb-4">
          <Link to={"/"}>
            <img src={logo} alt="logo" className="h-8" />
          </Link>
        </div>

        {/* Location */}
        <div className="flex gap-4">
          <img src={locationIcon} alt="location" className="h-6 w-6" />
          <p className="text-neutral-300 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
        </div>

        {/* Contact */}
        <div className="space-y-4 text-sm text-neutral-300">
          <div className="flex gap-4 items-center">
            <img src={phoneIcon} alt="phone" className="h-5 w-5" />
            <span>+1-543-123-4567</span>
          </div>
          <div className="flex gap-4 items-center">
            <img src={emailIcon} alt="email" className="h-5 w-5" />
            <span>example@fylo.com</span>
          </div>
        </div>

        {/* Links 1 */}
        <div className="flex flex-col gap-4 text-neutral-300 text-sm">
          <a href="#" className="hover:text-white">
            About Us
          </a>
          <a href="#" className="hover:text-white">
            Jobs
          </a>
          <a href="#" className="hover:text-white">
            Press
          </a>
          <a href="#" className="hover:text-white">
            Blog
          </a>
        </div>

        {/* Links 2 */}
        <div className="flex flex-col  gap-4 text-neutral-300 text-sm">
          <a href="#" className="hover:text-white">
            Contact Us
          </a>
          <a href="#" className="hover:text-white">
            Terms
          </a>
          <a href="#" className="hover:text-white">
            Privacy
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex gap-3 justify-center lg:justify-start items-center col-span-full lg:col-span-1">
          {[TiSocialFacebook, IoLogoTwitter, FaInstagram].map((Icon, i) => (
            <a
              key={i}
              href="#"
              className="p-1 border border-white rounded-full hover:bg-white hover:text-Navy-950 transition"
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </footer>
    </div>
  );
}
