import React from 'react';
import {Navigation, Scrollbar} from "swiper";
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/swiper-bundle.css'
import 'swiper/css/scrollbar';
import {Container} from 'react-bootstrap'

const LastMinuteTour = () => {

    return (
        <>
            <Container className="p-0">
                <div className="lastTourTitle text-uppercase">
                    <h4>горящие туры</h4>
                    <p>Поймайте момент</p>
                </div>

                <div className="swiper-block position-relative">
                    <div className="swiper-button image-swiper-button-next">
                        <svg width="72" height="72" viewBox="0 0 72 72" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <g filter="url(#filter0_d_247_6199)">
                                <circle cx="36" cy="32" r="16" fill="white"/>
                            </g>
                            <path
                                d="M34.1975 36.6199L38.0008 32.8165C38.45 32.3674 38.45 31.6324 38.0008 31.1832L34.1975 27.3799"
                                stroke="#1C1C1C" strokeWidth="1.3" strokeMiterlimit="10" strokeLinecap="round"
                                strokeLinejoin="round"/>
                            <defs>
                                <filter id="filter0_d_247_6199" x="0" y="0" width="72" height="72"
                                        filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                    <feColorMatrix in="SourceAlpha" type="matrix"
                                                   values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                   result="hardAlpha"/>
                                    <feOffset dy="4"/>
                                    <feGaussianBlur stdDeviation="10"/>
                                    <feComposite in2="hardAlpha" operator="out"/>
                                    <feColorMatrix type="matrix"
                                                   values="0 0 0 0 0.168627 0 0 0 0 0.168627 0 0 0 0 0.2 0 0 0 0.2 0"/>
                                    <feBlend mode="normal" in2="BackgroundImageFix"
                                             result="effect1_dropShadow_247_6199"/>
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_247_6199"
                                             result="shape"/>
                                </filter>
                            </defs>
                        </svg>
                    </div>
                    <div className="swiper-button image-swiper-button-prev">
                        <svg width="72" height="72" viewBox="0 0 72 72" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <g filter="url(#filter0_d_247_6196)">
                                <circle cx="36" cy="32" r="16" transform="rotate(-180 36 32)" fill="white"/>
                            </g>
                            <path
                                d="M37.8025 27.3801L33.9992 31.1835C33.55 31.6326 33.55 32.3676 33.9992 32.8168L37.8025 36.6201"
                                stroke="#1C1C1C" strokeWidth="1.3" strokeMiterlimit="10" strokeLinecap="round"
                                strokeLinejoin="round"/>
                            <defs>
                                <filter id="filter0_d_247_6196" x="0" y="0" width="72" height="72"
                                        filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                    <feColorMatrix in="SourceAlpha" type="matrix"
                                                   values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                   result="hardAlpha"/>
                                    <feOffset dy="4"/>
                                    <feGaussianBlur stdDeviation="10"/>
                                    <feComposite in2="hardAlpha" operator="out"/>
                                    <feColorMatrix type="matrix"
                                                   values="0 0 0 0 0.168627 0 0 0 0 0.168627 0 0 0 0 0.2 0 0 0 0.2 0"/>
                                    <feBlend mode="normal" in2="BackgroundImageFix"
                                             result="effect1_dropShadow_247_6196"/>
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_247_6196"
                                             result="shape"/>
                                </filter>
                            </defs>
                        </svg>
                    </div>

                <Swiper className=""
                    modules={[Navigation, Scrollbar]}
                    navigation={{
                        nextEl: ".image-swiper-button-next",
                        prevEl: ".image-swiper-button-prev",
                        disabledClass: "swiper-button-disabled"
                    }}
                    scrollbar={{ draggable: true, dragSize: 182.7 }}
                    spaceBetween={36.64}
                    slidesPerView={5.5}
                    speed={1500}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >

                        <SwiperSlide className="align-items-center ">
                            <div>
                                <img src="/img/Last_tour_image/card1.png"/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <img src="/img/Last_tour_image/card2.png"/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <img src="/img/Last_tour_image/card3.png"/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <img src="/img/Last_tour_image/card4.png"/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <img src="/img/Last_tour_image/card5.png"/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <img src="/img/Last_tour_image/card6.png"/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <img src="/img/Last_tour_image/card1.png"/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <img src="/img/Last_tour_image/card2.png"/>
                            </div>
                        </SwiperSlide>
                </Swiper>
                </div>
            </Container>
        </>
    )

}

export default LastMinuteTour;