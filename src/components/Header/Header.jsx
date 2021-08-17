import React from 'react';

const Header = ({hideShowCart,changeSearchInput,searchValue,setSearchValue}) => {


    return (
        <header className="header">

            <div className="container">

                <div className="logoImg">
                    <img src="/img/logo.png" alt="logo"/>
                </div>
                <div>
                    <h1>StarshipStore</h1>
                </div>

                <div  className="searchForm">
                    <label>
                        <input onChange={changeSearchInput} value={searchValue}  type="search"
                                className="searchField"
                                placeholder="Search"
                                />
                    </label>
                </div>

                <div className="cartBlock" onClick={hideShowCart}>
                    <img  className="imgCart" src="/img/cart.svg" alt="cart"/>

                    <span style={{whiteSpace: 'nowrap'}}>1,000,000,000 cred.</span>
                </div>
            </div>
        </header>
    );
};

export default Header;