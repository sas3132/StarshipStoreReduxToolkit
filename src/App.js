function App() {
    return (
        <div className="wrapper">
            <header>
                <div className="logoImg">
                    <img src="/img/logo.png" alt="logo"/>
                </div>
                <div>
                    <h1>StarshipStore</h1>
                </div>
                    <img src="/img/cart.svg" alt="cart"/>
                    <span>499,999 cred.</span>
            </header>
            <main className="main">
            <div className="coverFalcon">
                <img src="/img/cover.jpg" alt="buy"/>
                <div className="centeredText">Buy now <span style={{color:'#D4E3EA', whiteSpace:'nowrap'}}> Fly now</span></div>
            </div>
            <section className="content">
                <section className="contentProducts products">
                    <div className="productsItems">
                        <div className="productsItem">
                            <div  className="productsImg">
                                <img src="/img/productItem.jpg" alt=""/>
                            </div>
                            <div className="productName">Millennium Falcon</div>
                            <div  className="productButton">
                                <img src="/img/buttonBuy.svg" alt="buy"/>
                            </div>

                        </div>
                        <div className="productsItem">
                            <div  className="productsImg">
                                <img src="/img/productItem.jpg" alt=""/>
                            </div>
                            <div className="productName">Millennium Falcon</div>
                            <div  className="productButton">
                                <img src="/img/buttonBuy.svg" alt="buy"/>
                            </div>

                        </div>
                        <div className="productsItem">
                            <div  className="productsImg">
                                <img src="/img/productItem.jpg" alt=""/>
                            </div>
                            <div className="productName">Millennium Falcon</div>
                            <div  className="productButton">
                                <img src="/img/buttonBuy.svg" alt="buy"/>
                            </div>

                        </div>
                        <div className="productsItem">
                            <div  className="productsImg">
                                <img src="/img/productItem.jpg" alt=""/>
                            </div>
                            <div className="productName">Millennium Falcon</div>
                            <div  className="productButton">
                                <img src="/img/buttonBuy.svg" alt="buy"/>
                            </div>

                        </div>
                        </div>
                </section>
            </section>

            </main>
            <footer className="footer">
                <div className="footerText">2021</div>
            </footer>
        </div>
    );
}

export default App;
