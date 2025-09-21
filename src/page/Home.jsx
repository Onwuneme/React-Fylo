import Feature from "./Feature";
import Team from "./Team";


// src/pages/Home.jsx
export default function Home() {
  return (
    <section className="  max-w-[1500px] mx-auto  ">
      {/* Illustration */}
      <img
        src="/images/illustration-intro.png"
        alt="Intro Illustration"
        className="px-10 mx-auto relative -bottom-10 md:bottom-0 z-20"
      />

      {/* Curvy background */}
      <div className=" relative  text-center ">
        <div className="">
          <img
            src="/images/bg-curvy-mobile.svg"
            alt="image"
            className="w-full md:hidden"
          />
          <img
            src="/images/bg-curvy-desktop.svg"
            alt="image"
            className="w-full hidden md:block pt-20 "
          />
        </div>
        {/* Text content */}
        <div className=" absolute w-full top-20 md:top-0  ">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-snug">
            All your files in one secure location,{" "}
            <br className="hidden md:block" />
            accessible anywhere.
          </h1>

          <p className="mt-4 md:mt-10 text-gray-300 md:text-lg max-w-md mx-auto">
            Fylo stores all your most important files in one secure location.
            Access them wherever you need, share and collaborate with friends,
            family, and co-workers.
          </p>

          <button className="mt-6 bg-gradient-to-r from-cyan-300 to-cyan-500 text-white font-semibold py-3 px-10 rounded-full shadow-md hover:opacity-90 transition">
            Get Started
          </button>
        </div>
      </div>

      <div className="  bg-Navy-900  pt-40 md:pt-0 ">
        <Feature />
      </div>
      <Team/>
    </section>
  );
}
