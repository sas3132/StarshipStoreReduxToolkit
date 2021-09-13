import React from 'react';
import styles from './Footer.module.scss';


const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
            <div className={styles.contactBlock}>
                <div className={styles.contactImg} >
                <img className={styles.gitImg} src="/img/gitFoote.svg" alt="git"/>
                <img className={styles.telegImg} src="/img/telegFooter.svg" alt="telegram"/>
                </div >
            </div>
            <div className={styles.dateBlock} >
                <p>sas31 2021</p>
            </div>
            </div>
        </footer>
    );
};

export default Footer;