import { useRef } from 'react';
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import DemoWts from '../../assets/images/demo-wts.jpeg'
import DemoWts2 from '../../assets/images/demo-wts2.jpeg'

import "swiper/css";
import "swiper/css/navigation";
import './sec-recom-roy.css'

SwiperCore.use([Navigation]);

function SecRecomRoy(){
    const swiperRef = useRef(null);

    const handleNextClick = () => {
        if (swiperRef.current) {
        swiperRef.current.slideNext();
        }
    };
    const handlePrevClick = () => {
        if (swiperRef.current) {
        swiperRef.current.slidePrev();
        }
    };
    
    const swiperOptions = {
        navigation: {
        nextEl: '.swiper-button-prev',
        prevEl: '.swiper-button-next',
        },
        modules: [Navigation],
        slidesPerView: 1,
        spaceBetween: 18,
        loop: true,
        onSwiper: (swiper) => {
            swiperRef.current = swiper;
        },
        breakpoints: {
          768: {
            slidesPerView: 2,
            spaceBetween: 18,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 22,
          },
        },
    };

    return(
        <section id="recomRoy" className='sec-recom-roy py-4'>
            <div className='container text-center'>
                <h2 className='title-42'>הורים שגרמו לי להסמיק 😊</h2>
                <div className="slider-recom-wrap relative">
                    <div className="swiper-button-next" onClick={handleNextClick}></div>
                    <div className="swiper-button-prev" onClick={handlePrevClick}></div>
                    <Swiper {...swiperOptions} className="slider-recom">
                        <SwiperSlide>
                            <div className="slider-recom-item"><img className="img-cover" src={DemoWts} alt="" /></div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slider-recom-item"><img className="img-cover" src={DemoWts2} alt="" /></div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slider-recom-item"><img className="img-cover" src={DemoWts} alt="" /></div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slider-recom-item"><img className="img-cover" src={DemoWts2} alt="" /></div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slider-recom-item"><img className="img-cover" src={DemoWts} alt="" /></div>
                        </SwiperSlide>
                    </Swiper>
                </div>
                
                <div className='max-w-670 mx-auto text-base font-medium'>
                אבל רגע לפני שאתם מתחילים את הקורס, נוודא יחד שהילד/ה שלכם מתחבר/ת אליו. 
זה הזמן לפנות 2 דקות מזמנכם, לקרוא לילד/ה ולהכיר את רודי הארנב מקרוב
                </div>
                <button className='bt-primary'>אני רוצה לנסות</button>
            </div>
        </section>
    )
}

export default SecRecomRoy;