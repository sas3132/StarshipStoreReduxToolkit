import React, {useContext, useEffect, useRef, useState} from 'react';
import styles from './Cart.module.scss'
import {findByDisplayValue, logDOM} from "@testing-library/react";
import axios from "axios";
import {ThemeContext} from "../../App";
import {useClickOutsideHideCart} from "../Hooks/useHideCart";


const Cart = ({removeItemCart, showCart}) => {

    const[emptyCart, setEmptyCart] = useState(false)
    const [orderID, setOrderID] = useState(null)

    const {setCartItems, cartItems, hideShowCart} = useContext(ThemeContext)



    // function useClickOutsideHideCart(ref) {
    //     useEffect(() => {
    //         function handleClickOutside(event) {
    //             if (ref.current && !ref.current.contains(event.target)) {
    //                 hideShowCart();
    //             }
    //         }
    //
    //         document.addEventListener("mousedown", handleClickOutside);
    //         return () => {
    //             // Unbind the event listener on clean up
    //             document.removeEventListener("mousedown", handleClickOutside);
    //         };
    //     }, [ref]);
    // }


    // const wrapperRef = useRef(null);
    // useClickOutsideHideCart(wrapperRef);









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

                    {emptyCart ? (<div className={styles.orderProcessContainer}> <div className={styles.orderProcess}>
                            <div className={styles.itemOrder}>
                                <img src="img/noOrders.png" alt="orderImg"/>
                                <section className={styles.NameItem}>
                                    <p className={styles.nameItemP}>Prepare you money, Order № {orderTime(orderID)} is processed</p>
                                </section>
                            </div>
                        </div> </div>)
                        : (<div className={styles.items}>
                            {cartItems.map((obj, idx) => (
                        <div key={obj.cost + idx} className={styles.item}>
                            <img className={styles.itemImg} src={obj.img} alt=""/>
                            <section className={styles.delNameItem}>
                                <p className={styles.delNameItemP}>{obj.name}</p>
                                <img onClick={() => removeItemCart(obj.id)} className={styles.delItemCart}
                                     src="img/delItemCart.svg" alt=""/>
                            </section>
                        </div>
                    ))}</div>)}

                <p className={styles.totalCred}>{}Total: {total.toLocaleString()} cred.</p>
                {emptyCart ? (<button onClick={hideShowCart} className={styles.buttonCheckout}>Back</button>):
                    (<button onClick={orderButton} className={styles.buttonCheckout}>Checkout</button>
                    )}

            </div>

        </div>
    );
};

export default Cart;

// <div className={styles.orderProcess}>
// <div className={styles.itemOrder}>
//     <img src="img/order1.png" alt="orderImg"/>
//     <section className={styles.NameItem}>
//         <p className={styles.nameItemP}>Order</p>
//     </section>
// </div>
// </div>


// <div className={styles.orderProcess}><img src="img/order1.png" alt="orderImg"/>orders</div>