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
                <img className="imgCart" src="/img/cart.svg" alt="cart"/>
                <span style={{whiteSpace: 'nowrap'}} >1,000,000,000 cred.</span>
            </header>
            <main className="main">
                <div className="coverFalcon">
                    <img src="/img/cover.jpg" alt="buy"/>
                    <div className="centeredText">Buy now <span style={{color: '#D4E3EA', whiteSpace: 'nowrap'}}> Fly now</span>
                    </div>
                </div>
                <div className="productsItems">
                    <div className="productsItem">
                        <div className="productsImg">
                            <img src="/img/productItem.jpg" alt=""/>
                        </div>
                        <div className="productInfo">
                        <b className="productName">Millennium Falcon</b>
                        <p className="productDescription">Speed: 1,050km/h <br/>
                            Class: Light Freighter<br/>
                            Hyperdrive Rating: 0.5
                        </p>
                        <div className="productButton">
                            <b>Cost: 499,999 credits</b>
                            <img src="/img/buttonBuy.svg" alt="buy"/>
                        </div>
                        </div>
                    </div>
                    <div className="productsItem">
                        <div className="productsImg">
                            <img src="/img/productItem2.png" alt=""/>
                        </div>
                        <div className="productInfo">
                        <b className="productName">DS-1 Orbital Battle Station</b>
                        <p className="productDescription">Manufacturer: Imperial Department<br/>
                            Class: Deep Space Mobile Battlestation<br/>
                            Hyperdrive Rating: 4.0
                        </p>
                        <div className="productButton">
                            <b>Cost: 1,000,000,000 credits</b>
                            <img src="/img/buttonBuy.svg" alt="buy"/>
                        </div>
                        </div>
                    </div>
                    <div className="productsItem">
                        <div className="productsImg">
                            <img src="/img/productItem3.jpg" alt=""/>
                        </div>
                        <div className="productInfo">
                        <b className="productName">Twin Ion Engine Advanced x1</b>
                        <p className="productDescription">Speed: 1,200km/h<br/>
                            Class: Starfighter<br/>
                            Hyperdrive Rating: 1.0
                        </p>
                        <div className="productButton">
                            <b>Cost: 129,999 credits</b>
                            <img src="/img/buttonBuy.svg" alt="buy"/>
                        </div>
                        </div>
                    </div>
                    <div className="productsItem">
                        <div className="productsImg">
                            <img src="/img/productItem4.jpeg" alt=""/>
                        </div>
                        <div className="productInfo">
                        <b className="productName">J-type 327 Nubian royal starship</b>
                        <p className="productDescription">Speed: 920km/h<br/>
                            Class: Yacht<br/>
                            Hyperdrive Rating: 1.8
                        </p>
                        <div className="productButton">
                            <b>Cost: 499,999 credits</b>
                            <img src="/img/buttonBuy.svg" alt="buy"/>
                        </div>
                        </div>
                    </div>


                </div>
            </main>
            <footer className="footer">
                <div className="footerText">sas31 2021</div>
            </footer>
        </div>
    );
}

export default App;
