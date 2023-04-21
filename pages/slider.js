// import React, { useRef, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, EffectFade } from "swiper";

// import BG1 from "../public/assets/1.png";
// import BG2 from "../public/assets/2.png";
// import BG3 from "../public/assets/3.png";
// import LOGO from "../public/assets/logo.png";
// import FLOW from "../public/assets/flow_new.png";

// import "swiper/css";
// import "swiper/css/effect-fade";

// import Image from "next/image";
// import Link from "next/link";
// export default function Home() {
//   const heroBGLeft = {
//     backgroundImage:
//       "linear-gradient(#ffffff00 0%, #ffffff40 5%, #ffffff 100%), url('/assets/background_1.png')",
//     backgroundSize: "cover",
//     backgroundRepeat: "no-repeat",
//     backgroundPosition: "top center",
//     minHeight: "100vh",
//   };
//   const heroBGRight = {
//     backgroundImage:
//       "linear-gradient(#ffffff00 0%, #ffffff40 5%, #ffffff 100%), url('/assets/background_2_old.png')",
//     backgroundSize: "cover",
//     backgroundRepeat: "no-repeat",
//     backgroundPosition: "top center",
//     minHeight: "100vh",
//   };

//   return (
//     <div className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-full h-screen">
//       <div>
//         <div className="grid grid-cols-2">
//           {/* Logo section */}
//           <div className="absolute top-0 left-[50%] transform -translate-x-1/2 translate-y-5">
//             <Image src={LOGO} alt="" className="w-40 h-auto drop-shadow-xl" />
//           </div>
//           {/* Background  */}
//           <div
//             className="flex justify-between items-center text-center"
//             style={heroBGLeft}
//           >
//             {/* Left section */}
//             <div>
//               <div className="">
//                 <h1>Turnkey Lighting Solutions</h1>
//                 <p>
//                   Energy LED focuses on solving your lighting concerns. From
//                   design to installation and maintenance, we will walk the
//                   entire lighting transition journey with you.
//                 </p>
//                 <Link href="/">
//                   <button>Shop Now</button>
//                 </Link>
//               </div>
//               <div className="">
//                 <Image
//                   className="w-[520px] rounded-2xl drop-shadow-xl shadow-black"
//                   src={FLOW}
//                   alt=""
//                 ></Image>
//               </div>
//             </div>
//           </div>
//           <div
//             className="flex justify-between items-center text-center"
//             style={heroBGRight}
//           >
//             {/* Right section */}
//             <div>
//               <div>
//                 <h1>Shop Lighting Products</h1>
//                 <p>
//                   We are one of the largest distributors of Professional
//                   Lighting in Africa, take a look at our LED lighting products
//                   that ensure long-term energy savings.
//                 </p>
//                 <Link href="/">
//                   <button>Shop Now</button>
//                 </Link>
//               </div>
//               <div>
//                 <Swiper
//                   effect={"fade"}
//                   autoplay={{ delay: 3000, disableOnInteraction: false }}
//                   className="w-[520px] rounded-2xl shadow-xl shadow-black"
//                   modules={[Autoplay, EffectFade]}
//                   direction={"horizontal"}
//                   onMouseEnter={(swiper) => swiper.autoplay.stop()}
//                   onMouseLeave={(swiper) => swiper.autoplay.start()}
//                 >
//                   <SwiperSlide>
//                     <Image src={BG1} alt="" className="w-full h-auto" />
//                   </SwiperSlide>
//                   <SwiperSlide>
//                     <Image src={BG2} alt="" className="w-full h-auto" />
//                   </SwiperSlide>
//                   <SwiperSlide>
//                     <Image src={BG3} alt="" className="w-full h-auto" />
//                   </SwiperSlide>
//                 </Swiper>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-full">
//           <div className="grid grid-cols-2">
// <div>
  
// </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

//           {/* Slider */}
//           {/* <div className="absolute bottom-0 left-[50%] transform -translate-x-1/2 -translate-y-5">
//             <Swiper
//               effect={"fade"}
//               autoplay={{ delay: 3000, disableOnInteraction: false }}
//               className="w-[520px] rounded-2xl shadow-xl shadow-black"
//               modules={[Autoplay, EffectFade]}
//               direction={"horizontal"}
//               onMouseEnter={(swiper) => swiper.autoplay.stop()}
//               onMouseLeave={(swiper) => swiper.autoplay.start()}
//             >
//               <SwiperSlide>
//                 <Image src={BG1} alt="" className="w-full h-auto" />
//               </SwiperSlide>
//               <SwiperSlide>
//                 <Image src={BG2} alt="" className="w-full h-auto" />
//               </SwiperSlide>
//               <SwiperSlide>
//                 <Image src={BG3} alt="" className="w-full h-auto" />
//               </SwiperSlide>
//             </Swiper>
//           </div> */}