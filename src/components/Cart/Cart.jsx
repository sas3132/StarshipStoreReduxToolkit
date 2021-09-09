import React, {useContext, useState} from 'react';
import styles from './Cart.module.scss'
import {logDOM} from "@testing-library/react";
import axios from "axios";
import {ThemeContext} from "../../App";


const Cart = ({removeItemCart, showCart}) => {

    const[emptyCart, setEmptyCart]=useState(false)
    const [orderID, setOrderID] = useState(null)

    const {setCartItems, cartItems} = useContext(ThemeContext)



    const orderTime = (orderID='') => {
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0'); //
        let yyyy = today.getFullYear();
        return(
            orderID + dd + mm + yyyy
        )


    }


    const orderButton = async () => {
        try {
            if (cartItems.length > 0) {
                const {data} = await axios.post('https://612e1f69d11e5c00175583a2.mockapi.io/orders', {date: orderTime() ,item: cartItems});
                setOrderID(data.id)
                setCartItems([])
                for (let i = 0; i < cartItems.length; i++) {
                    const item = cartItems[i]
                    await axios.delete("https://612e1f69d11e5c00175583a2.mockapi.io/cart/" + item.id).then();
                    setEmptyCart(true)
                }
            }
        } catch (err) {
            console.log("Ошибка оформления заказа");
        }


    }

    const total = cartItems.reduce((sum, obj) => sum + obj.cost, 0)

    return (
        // <div className={`${styles.cartDrawer} ${showCart ? document.body.style.overflow = 'hidden' : ''}`}>
        <div className={styles.cartDrawer}>
            <div className={styles.cart}>
                <h2>Cart</h2>

                    {emptyCart ? (<div className={styles.orderProcess}>
                            <div className={styles.itemOrder}>
                                <img src="/img/order1.png" alt="orderImg"/>
                                <section className={styles.NameItem}>
                                    <p className={styles.nameItemP}>Order № {orderTime(orderID)} is processed</p>
                                </section>
                            </div>
                        </div>)
                        : (<div className={styles.items}>
                            {cartItems.map((obj, idx) => (
                        <div key={obj.cost + idx} className={styles.item}>
                            <img className={styles.itemImg} src={obj.img} alt=""/>
                            <section className={styles.delNameItem}>
                                <p className={styles.delNameItemP}>{obj.name}</p>
                                <img onClick={() => removeItemCart(obj.id)} className={styles.delItemCart}
                                     src="/img/delItemCart.svg" alt=""/>
                            </section>
                        </div>
                    ))}</div>)}


                <p className={styles.totalCred}>{}Total: {total.toLocaleString()} cred.</p>
                <button onClick={orderButton} className={styles.buttonCheckout}>Checkout</button>
            </div>

        </div>
    );
};

export default Cart;

// <div className={styles.orderProcess}>
// <div className={styles.itemOrder}>
//     <img src="/img/order1.png" alt="orderImg"/>
//     <section className={styles.NameItem}>
//         <p className={styles.nameItemP}>Order</p>
//     </section>
// </div>
// </div>


// <div className={styles.orderProcess}><img src="/img/order1.png" alt="orderImg"/>orders</div>