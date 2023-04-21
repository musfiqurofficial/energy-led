import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper";

import BG1 from "../public/assets/1.png";
import BG2 from "../public/assets/2.png";
import BG3 from "../public/assets/3.png";
import LOGO from "../public/assets/logo.png";
import FLOW from "../public/assets/flow_new.png";

import "swiper/css";
import "swiper/css/effect-fade";

import Image from "next/image";
import Link from "next/link";
export default function Home() {
  const heroBGLeft = {
    backgroundImage:
      "linear-gradient(#000000 0%, #00000040 90%, #00000000 100%), url('/assets/background_1.png')",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top center",
    minHeight: "100vh",
  };
  const heroBGRight = {
    backgroundImage:
      "linear-gradient(#ffffff 0%, #ffffff40 90%, #ffffff60 100%), url('/assets/background_2_old.png')",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top center",
    minHeight: "100vh",
  };

  return (
    <div className=" mx-auto sm:max-w-xl md:max-w-full lg:max-w-full lg:h-screen">
      <div>
        <div className=" lg:grid grid-cols-2">
          {/* Logo section */}
          <div className="absolute hidden lg:block top-0 left-[50%] transform -translate-x-1/2 translate-y-5 bg-white p-4 drop-shadow rounded">
            <Link href="/">
              <Image
                src={LOGO}
                alt=""
                className="lg:w-24 xl:w-28 2xl:w-32 h-auto drop-shadow-xl"
              />
            </Link>
          </div>
          {/* Background  */}
          <div
            className="flex justify-between items-center text-center text-white"
            style={heroBGLeft}
          >
            {/* Left section */}
            <div className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-2xl h-[90%]">
              <div className="flex flex-col justify-between items-center gap-y-20 text-center">
                <div className="">
                  <h1 className="text-[1.5rem] md:text-[2.5rem] lg:text-[2rem] xl:text-[2.1rem] 2xl:text-[2.6rem] font-bold mb-7 sm:mb-0">
                    Turnkey Lighting Solutions
                  </h1>
                  <p className="hidden sm:block w-[80%] lg:w-[79%] xl:w-[75%] 2xl:w-full mx-auto lg:text-sm xl:text-base 2xl:text-lg my-5">
                    Energy LED focuses on solving your lighting concerns. From
                    design to installation and maintenance, we will walk the
                    entire lighting transition journey with you.
                  </p>
                  <Link href="/">
                    <button className="bg-[#0DD151] px-4 2xl:px-5 py-3 font-semibold text-white hover:bg-[#0dd152dd] text-sm 2xl:text-base rounded">
                      LIGHTING SOLUTIONS
                    </button>
                  </Link>
                </div>
                <div className="lg:-mt-10 -mt-10">
                  <Image
                    className="w-[320px] md:w-[520px] lg:w-[220px] xl:w-[390px] 2xl:w-[520px] rounded-2xl drop-shadow-xl shadow-gray-400"
                    src={FLOW}
                    alt=""
                  ></Image>
                </div>
              </div>
            </div>
          </div>
          <div
            className="flex justify-between items-center text-center"
            style={heroBGRight}
          >
            {/* Right section */}
            <div className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-xl h-[90%] relative">
              <div className="flex flex-col justify-between items-center text-center">
                <div>
                  <h1 className="text-[1.5rem] md:text-[2.5rem] lg:text-[2rem] xl:text-[2.1rem] 2xl:text-[2.6rem] font-bold mb-7 sm:mb-0">
                    Shop Lighting Products
                  </h1>
                  <p className="hidden sm:block w-[80%] lg:w-[80%] xl:w-[80%] 2xl:w-full mx-auto lg:text-sm xl:text-base 2xl:text-lg my-5">
                    We are one of the largest distributors of Professional
                    Lighting in Africa, take a look at our LED lighting products
                    that ensure long-term energy savings.
                  </p>
                  <Link href="/">
                    <button className="bg-[#0DD151] px-4 2xl:px-5 py-3 font-semibold text-white hover:bg-[#0dd152dd] text-sm 2xl:text-base rounded">
                      Shop Now
                    </button>
                  </Link>
                </div>
                <div className="mt-20 lg:mt-16 xl:mt-24 2xl:mt-32">
                  <Swiper
                    effect={"fade"}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    className="w-[320px] md:w-[620px] lg:w-[420px] xl:w-[520px] 2xl:w-[720px] rounded-2xl shadow-xl shadow-gray-400"
                    modules={[Autoplay, EffectFade]}
                    direction={"horizontal"}
                    onMouseEnter={(swiper) => swiper.autoplay.stop()}
                    onMouseLeave={(swiper) => swiper.autoplay.start()}
                  >
                    <SwiperSlide>
                      <Link href="/">
                        <Image src={BG1} alt="" className="w-full h-auto" />
                      </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                      <Link href="/">
                        <Image src={BG2} alt="" className="w-full h-auto" />
                      </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                      <Link href="/">
                        <Image src={BG3} alt="" className="w-full h-auto" />
                      </Link>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

{
  /* Slider */
}
{
  /* <div className="absolute bottom-0 left-[50%] transform -translate-x-1/2 -translate-y-5">
            <Swiper
              effect={"fade"}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              className="w-[520px] rounded-2xl shadow-xl shadow-black"
              modules={[Autoplay, EffectFade]}
              direction={"horizontal"}
              onMouseEnter={(swiper) => swiper.autoplay.stop()}
              onMouseLeave={(swiper) => swiper.autoplay.start()}
            >
              <SwiperSlide>
                <Image src={BG1} alt="" className="w-full h-auto" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src={BG2} alt="" className="w-full h-auto" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src={BG3} alt="" className="w-full h-auto" />
              </SwiperSlide>
            </Swiper>
          </div> */
}
