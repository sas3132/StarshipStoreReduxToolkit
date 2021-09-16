import React from 'react';
import styles from './Footer.module.scss';


const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
            <div className={styles.contactBlock}>
                <div className={styles.contactImg} >
                    <a href="https://github.com/sas3132"><img className={styles.gitImg} src="img/gitFoote.svg" alt="git"/></a>
                    <a href="https://t.me/sas31sas"><img className={styles.telegImg} src="img/telegFooter.svg" alt="telegram"/></a>


                </div >
            </div>
            <div className={styles.dateBlock} >
                <p>Designed and developed by Sas31 © 2021. StarshipStore.</p>
            </div>
            </div>
        </footer>
    );
};

export default Footer;