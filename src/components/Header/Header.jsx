import React, {useContext, useRef, useState} from 'react';
import styles from './Header.module.scss';
import {logDOM} from "@testing-library/react";
import {ThemeContext} from "../../App";
import {Link} from "react-router-dom";


const Header = ({hideShowCart, changeSearchInput, searchValue, setSearchValue}) => {


    const {cartItems} = useContext(ThemeContext)

    const total = cartItems.reduce((sum, obj) => sum + obj.cost, 0)

    return (
        <header className={styles.header}>

            <div className={styles.container}>
                <Link to="/">
                    <div className={styles.logoImg}>
                        <img src="/img/logo.png" alt="logo"/>
                    </div>
                </Link>

                <div className={styles.titleHome}>
                    <h1>StarshipStore</h1>
                </div>

                <div className={styles.searchForm}>
                    <label>
                        <input style={searchValue === '' ? {width: null} : {width: '230px'}}
                               onChange={changeSearchInput} value={searchValue} type="search"
                               className={styles.searchField}
                               placeholder="Search"
                        />
                    </label>
                </div>
                <Link to="/orders">
                <img  className={styles.orders} src="/img/order.svg" alt="order"/>
                </Link>
                <div className={styles.cartBlock} onClick={hideShowCart}>
                    <img className={styles.imgCart} src="/img/cart.svg" alt="cart"/>

                    <span style={{whiteSpace: 'nowrap'}}>{total.toLocaleString()} cred.</span>
                </div>
            </div>
        </header>
    );
};

export default Header;