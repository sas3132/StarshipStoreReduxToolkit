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
            <div className="coverFalcon">
                <img src="/img/cover.jpg" alt="buy"/>
                <div className="centeredText">Buy now <span style={{color:'#D4E3EA'}}> Fly now</span></div>
            </div>
        </div>
    );
}

export default App;
