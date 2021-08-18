import React from 'react';
import styles from './Advertising.module.scss'

const Advertising = () => {
    return (
        <div className={styles.coverFalcon}>
            <img src="/img/cover1.jpg" alt="buy"/>
            <div className={styles.centeredText}>Buy now <span style={{color: '#D4E3EA', whiteSpace: 'nowrap'}}> Fly now</span>
            </div>
        </div>
    );
};

export default Advertising;