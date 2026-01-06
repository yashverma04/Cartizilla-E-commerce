import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faArrowRight } from '@fortawesome/free-solid-svg-icons';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../Style/Banner.css';

import img01 from '../assets/01.png';
import img03 from '../assets/03.png';
import img04 from '../assets/04.png';

const Banner = () => {
    // 1. DATA ARRAY: Yahan humne prices ko Rupees (₹) me badal diya hai
    const productData = [
        { name: "Modern Fabric Sofa Set", price: "₹45,000", img: img01 },
        { name: "Minimalist Gray Bed Frame", price: "₹12,500", img: img03 },
        { name: "Scandinavian Wood Chair", price: "₹65,000", img: img04 }
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="banner-slider-section py-5">
            <div className="container text-center">
                <h1 className="banner-heading mb-5">Everything You Need for <br /> a Modern Interior</h1>
                
                <div className="slider-wrapper position-relative">
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={30}
                        slidesPerView={1}
                        centeredSlides={true}
                        loop={true} 
                        
                        onRealIndexChange={(swiper) => {
                            setActiveIndex(swiper.realIndex % productData.length);
                        }}
                        
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        navigation={{
                            nextEl: '.swiper-button-next-custom',
                            prevEl: '.swiper-button-prev-custom',
                        }}
                        breakpoints={{
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                        className="mySwiper"
                    >
                        {/* Pehla Set */}
                        {productData.map((item, index) => (
                            <SwiperSlide key={`main-${index}`}>
                                <div className="product-img-box">
                                    <img src={item.img} alt={item.name} className="img-fluid" />
                                </div>
                            </SwiperSlide>
                        ))}

                        {/* Duplication Set taaki loop smooth chale */}
                        {productData.map((item, index) => (
                            <SwiperSlide key={`dup-${index}`}>
                                <div className="product-img-box">
                                    <img src={item.img} alt={item.name} className="img-fluid" />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <div className="swiper-button-prev-custom shadow-sm">
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </div>
                    <div className="swiper-button-next-custom shadow-sm">
                        <FontAwesomeIcon icon={faChevronRight} />
                    </div>
                </div>

                <div className="product-info mt-4">
                    <p className="m-0 text-muted">
                        {productData[activeIndex]?.name}
                    </p>
                    {/* Yahan ab ₹ symbol ke saath price dikhegi */}
                    <h3 className="fw-bold">
                        {productData[activeIndex]?.price}
                    </h3>
                    <button className="btn btn-dark shop-btn mt-3 px-4 py-2">
                        Shop now <FontAwesomeIcon icon={faArrowRight} className="ms-2" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Banner;