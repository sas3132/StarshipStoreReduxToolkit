import React from 'react';
import styles from './Advertising.module.scss'


import {Swiper, SwiperSlide} from "swiper/react";


import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss"



import SwiperCore, {
    Navigation,
} from 'swiper';

SwiperCore.use([Navigation]);


const Advertising = () => {
    return (

        <Swiper  className={styles.coverFalcon} loop={true} navigation={true} style={{marginLeft: 0,marginRight: 0, zIndex: 0}}>
            <div className={styles.centeredText}>Buy now <span style={{color: '#D4E3EA', whiteSpace: 'nowrap'}}> Fly now</span>
                </div>
                <SwiperSlide >
                    <img   src="/img/cover1.jpg" alt="buy"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/img/cover.jpg" alt="buy"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/img/cover2.jpg" alt="buy"/>
                </SwiperSlide>


        </Swiper>



    );
};

export default Advertising;