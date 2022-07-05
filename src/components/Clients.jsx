import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";



// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function Clients() {
  return (
    <>
     <div>
                <h1 className="client-head">Clients</h1>
                <p className="clint-p"> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p>
            </div>
            <div className="swiper-mrg">
     <Swiper 
        slidesPerView={1}
        spaceBetween={10}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        breakpoints={ {
      320: {
        slidesPerView: 2,
        spaceBetween: 40
      },
      480: {
        slidesPerView: 3,
        spaceBetween: 60
      },
      640: {
        slidesPerView: 4,
        spaceBetween: 80
      },
      992: {
        slidesPerView: 6,
        spaceBetween: 120
      },
        // breakpoints={{
        //   555: {
        //     slidesPerView: 3,
        //     spaceBetween: 3,
        //   },
        //   640: {
        //     slidesPerView: 4,
        //     spaceBetween: 4,
        //   },
        //   768: {
        //     slidesPerView: 4,
        //     spaceBetween: 20,
        //   },

        //   1024: {
        //     slidesPerView: 6,
        //     spaceBetween: 60,
        //   },
        }}
        
      >
        <SwiperSlide><img className="clint-imag"  src="https://bootstrapmade.com/demo/templates/Eterna/assets/img/clients/client-8.png" /></SwiperSlide>
        <SwiperSlide><img className="clint-imag" src="https://bootstrapmade.com/demo/templates/Eterna/assets/img/clients/client-6.png" /></SwiperSlide>
        <SwiperSlide><img className="clint-imag" src="https://bootstrapmade.com/demo/templates/Eterna/assets/img/clients/client-7.png" /></SwiperSlide>
        <SwiperSlide><img className="clint-imag" src="https://bootstrapmade.com/demo/templates/Eterna/assets/img/clients/client-5.png" /></SwiperSlide>
        <SwiperSlide><img className="clint-imag" src="https://bootstrapmade.com/demo/templates/Eterna/assets/img/clients/client-4.png" /></SwiperSlide>
        <SwiperSlide><img className="clint-imag" src="https://bootstrapmade.com/demo/templates/Eterna/assets/img/clients/client-3.png" /></SwiperSlide>
        <SwiperSlide><img className="clint-imag" src="https://bootstrapmade.com/demo/templates/Eterna/assets/img/clients/client-2.png" /></SwiperSlide>
        <SwiperSlide><img className="clint-imag" src="https://bootstrapmade.com/demo/templates/Eterna/assets/img/clients/client-1.png" /></SwiperSlide>
        <SwiperSlide><img className="clint-imag" src="https://bootstrapmade.com/demo/templates/Eterna/assets/img/clients/client-5.png" /></SwiperSlide>
       
      </Swiper>
      </div>
    </>
  );
}


// import React from "react";

// var swiper = document.querySelectorAll(".review-slider", {
//     spaceBetween: 20,
//     centeredSlides: true,
//     autoplay: {
//       delay: 7500,
//       disableOnInteraction: false,
//     },
//     loop:true,
//     breakpoints: {
//       0: {
//           slidesPerView: 3,
//       },
//       640: {
//         slidesPerView: 2,
//       },
//       768: {
//         slidesPerView: 2,
//       },
//       1024: {
//         slidesPerView: 3,
//       },
//     },
//   });
// const Clients = ()=>{
//     return(
//         <>
//             <div>
//                 <h1 className="client-head">Clients</h1>
//                 <p> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p>
//             </div>
//             <div class=" swiper-container review-slider">
//     <div class="swiper-wrapper">
//       <div class="swiper-slide slide">
//           <img src="https://bootstrapmade.com/demo/templates/Eterna/assets/img/clients/client-2.png" alt="" />
      
//         </div>
      
//             <div class="swiper-slide slide">
//                 <img src="https://bootstrapmade.com/demo/templates/Eterna/assets/img/clients/client-6.png" alt="" />
//               </div>
      
//             <div class="swiper-slide slide">
//                   <img src="https://bootstrapmade.com/demo/templates/Eterna/assets/img/clients/client-4.png" alt="" />
//                 </div>
//             </div>
//       </div>
//         </>
//     )
// }
// export default Clients;