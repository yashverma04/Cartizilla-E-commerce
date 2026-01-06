import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faArrowRight } from '@fortawesome/free-solid-svg-icons';

// 1. IMPORT FRAMER MOTION (Typewriter hata diya)
import { motion } from 'framer-motion';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../Style/Banner.css';

import img01 from '../assets/01.png';
import img03 from '../assets/03.png';
import img04 from '../assets/04.png';

const Banner = () => {
    const productData = [
        { name: "Modern Fabric Sofa Set", price: "₹45,000", img: img01 },
        { name: "Minimalist Gray Bed Frame", price: "₹12,500", img: img03 },
        { name: "Scandinavian Wood Chair", price: "₹65,000", img: img04 }
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    // --- ANIMATION CONFIGURATION ---
    const line1 = "Everything You Need for".split(" ");
    const line2 = "a Modern Interior".split(" ");

    const wordVariant = {
        hidden: { y: 20, opacity: 0 }, // Text niche aur invisible rahega start mein
        visible: (i) => ({
            y: 0,
            opacity: 1,
            transition: {
                delay: i * 0.1, // Har word 0.1s ke gap par aayega
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1], // Smooth easing
            },
        }),
    };
    // -------------------------------

    return (
        <section className="banner-slider-section py-5">
            <div className="container text-center">
                
                {/* 2. UPDATED MODERN HEADING */}
                <h1 className="banner-heading mb-5 d-flex flex-column align-items-center" style={{ minHeight: '90px' }}>
                    
                    {/* Line 1 */}
                    <div className="d-block">
                        {line1.map((word, i) => (
                            <motion.span
                                key={i}
                                custom={i}
                                initial="hidden"
                                animate="visible"
                                variants={wordVariant}
                                style={{ display: 'inline-block', marginRight: '8px' }}
                            >
                                {word}
                            </motion.span>
                        ))}
                    </div>

                    {/* Line 2 (Isme thoda extra delay diya hai taaki line 1 ke baad aaye) */}
                    <div className="d-block">
                        {line2.map((word, i) => (
                            <motion.span
                                key={i}
                                custom={i + line1.length} // Delay continue karne ke liye
                                initial="hidden"
                                animate="visible"
                                variants={wordVariant}
                                style={{ display: 'inline-block', marginRight: '8px' }}
                            >
                                {word}
                            </motion.span>
                        ))}
                    </div>

                </h1>
                
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
                        {productData.map((item, index) => (
                            <SwiperSlide key={`main-${index}`}>
                                <div className="product-img-box">
                                    <img src={item.img} alt={item.name} className="img-fluid" />
                                </div>
                            </SwiperSlide>
                        ))}

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