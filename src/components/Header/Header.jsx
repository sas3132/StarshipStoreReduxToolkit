import React, {useState} from 'react';
import styles from './Header.module.scss';
import {logDOM} from "@testing-library/react";



const Header = ({hideShowCart,changeSearchInput,searchValue,setSearchValue}) => {



    return (
        <header className={styles.header}>

            <div className={styles.container}>

                <div className={styles.logoImg}>
                    <img src="/img/logo.png" alt="logo"/>
                </div>
                <div className={styles.titleHome}>
                    <h1>StarshipStore</h1>
                </div>

                <div   className={styles.searchForm}>
                    <label>
                        <input  style={searchValue === '' ? {width: null}: {width: '230px'}} onChange={changeSearchInput} value={searchValue}  type="search"
                                className={styles.searchField}
                                placeholder="Search"
                        />
                    </label>
                </div>

                <div className={styles.cartBlock} onClick={hideShowCart}>
                    <img  className={styles.imgCart} src="/img/cart.svg" alt="cart"/>

                    <span style={{whiteSpace: 'nowrap'}}>1,000,000,000 cred.</span>
                </div>
            </div>
        </header>
    );
};

export default Header;