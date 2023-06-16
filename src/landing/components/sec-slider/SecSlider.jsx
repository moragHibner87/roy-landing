import { useRef } from 'react';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Yes from '../../assets/images/yes.png'
import Ynet from '../../assets/images/ynet.png'
import Play from '../../assets/images/play.svg'

import "swiper/css";
import "swiper/css/navigation";
import './sec-slider.css'

//SwiperCore.use([Navigation]);

function SecSlider(){
    const swiperRef = useRef(null);
    
    const swiperOptions = {
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
        modules: [Pagination],
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,
        onSwiper: (swiper) => {
            swiperRef.current = swiper;
        },
    };

    return(
        <section className='sec-slider py-4 bg-yellow over-hide'>
            <div className='container text-center'>
                <h2 className='title-42'>בא לכם שנכיר קצת יותר?</h2>
                <div className='text-xl mb-1'>איזה כיף! הנה כמה מההופעות שלי בתקשורת</div>
                <div className="slider-wrap relative">
                    <Swiper {...swiperOptions} className="slider">
                        <SwiperSlide>
                            <div className="slider-item">
                                <div className='bt-play absolute'><img className="" src={Play} role='presentation' /></div>
                                <img className="img-cover" src={Yes} alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slider-item">
                                <div className='bt-play absolute'><img className="" src={Play} role='presentation' /></div>
                                <img className="img-cover" src={Yes} alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slider-item">
                                <div className='bt-play absolute'><img className="" src={Play} role='presentation' /></div>
                                <img className="img-cover" src={Yes} alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slider-item">
                                <div className='bt-play absolute'><img className="" src={Play} role='presentation' /></div>
                                <img className="img-cover" src={Yes} alt="" />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                    <div className='swiper-pagination'></div>
                </div>
            </div>
        </section>
    )
}

export default SecSlider;