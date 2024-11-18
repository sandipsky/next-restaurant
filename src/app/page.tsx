import Image from "next/image";
import Services from "@/components/services/services";
import Process from "@/components/process/process";
import Testimonials from "@/components/testimonials/testimonials";

export default function Home() {
  return (
    <>
      <section className="relative w-full h-screen bg-gray-800 text-white">
        <div className="absolute inset-0">
          <Image
            src="/images/team.jpg"
            alt="Team"
            fill={true}
            className="object-cover opacity-40"
          />
        </div>

        <div className="relative flex flex-col items-center justify-center h-full px-4">
          <h1 className="font-bold text-5xl md:text-7xl text-center">
            Welcome to Next Corporate
          </h1>
          <p className="mt-4 text-lg md:text-2xl text-center max-w-2xl">
            We are a leading company in delivering innovative solutions for your business growth.
          </p>
          {/* <button className="mt-6 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md shadow-md">
            Get Started
          </button> */}
          <button className="nav-button mt-6">
            Get Started
          </button>
        </div>

        <span className="scroll-btn absolute  bottom-4 left-[50%]">
          <a href="#">
            <span className="mouse">
              <span>
              </span>
            </span>
          </a>
        </span>
      </section>

      <Services></Services>
      <Process></Process>
      <Testimonials></Testimonials>
    </>
  );
}
