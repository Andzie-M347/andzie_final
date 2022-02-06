import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import HomeData from "../../../data/home.json";
import Intro from "../../../components/intro";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

SwiperCore.use([Navigation]);
const IntroContainer = () => {
    const swiperOption = {
        loop: true,
        speed: 600,
        spaceBetween: 0,
        slidesPerView: 1,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".slider-active .swiper-button-next",
            prevEl: ".slider-active .swiper-button-prev",
        },
    };
    return (
        <div className="section slider-section">
            <Swiper effect="fade" className="slider-active" {...swiperOption}>
                {HomeData[0].slider &&
                    HomeData[0].slider.map((single, key) => {
                        return (
                            <SwiperSlide key={key}>
                                <Intro key={key} data={single} />
                            </SwiperSlide>
                        );
                    })}
                <div className="swiper-button-next">
                    <BsChevronRight />
                </div>
                <div className="swiper-button-prev">
                    <BsChevronLeft />
                </div>
            </Swiper>

            <ul className="social">
                <li>
                    <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://www.linkedin.com/in/andzisi-mabaso"
                    >
                        <FaLinkedinIn />
                    </a>
                </li>
                <li>
                    <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://github.com/Andzie-M347"
                    >
                        <FaGithub />
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default IntroContainer;
