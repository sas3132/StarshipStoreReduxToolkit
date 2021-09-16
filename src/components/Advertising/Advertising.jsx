import React from 'react';
import styles from './Advertising.module.scss'


import {Swiper, SwiperSlide} from "swiper/react";


import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss"



import SwiperCore, {
    Autoplay,
    Navigation,
    Pagination,
} from 'swiper';

SwiperCore.use([Autoplay,Navigation,Pagination]);


const Advertising = () => {
    return (

        <Swiper  className={styles.coverFalcon} pagination={{
            "clickable": true
        }} autoplay={{
            "delay": 10000,
            "disableOnInteraction": false
        }}  loop={true} navigation={false} style={{'--swiper-navigation-color': '#861410',marginLeft: 0,marginRight: 0, zIndex: 0}}>
            <div className={styles.centeredText}>Buy now <span style={{color: '#D4E3EA', whiteSpace: 'nowrap'}}> Fly now</span>
                </div>
                <SwiperSlide >
                    <img   src="img/cover1.jpg" alt="buy"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="img/cover.jpg" alt="buy"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="img/cover2.jpg" alt="buy"/>
                </SwiperSlide>


        </Swiper>



    );
};

export default Advertising;