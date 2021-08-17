import React from 'react';


const Cart = ({cartItems,removeItemCart}) => {


    return (
        <div className="cartDrawer">
            <div className="cart">
                <h2>Cart</h2>
                <div className='items'>
                    {cartItems.map((obj,idx)=>(
                        <div key={obj.cost+idx} className="item">
                            <img className="itemImg" src={obj.img} alt=""/>
                            <section className="delNameItem">
                                <p className="delNameItemP">{obj.name}</p>
                                <img onClick={()=>removeItemCart(obj.id)} className="delItemCart" src="/img/delItemCart.svg" alt=""/>
                            </section>
                        </div>
                    ))}

                </div>
                <p className="totalCred">{}Total: 1,000,000,000 cred.</p>
                <button className="buttonCheckout">Checkout</button>
            </div>

        </div>
    );
};

export default Cart;