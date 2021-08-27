import React, {useContext} from 'react';
import styles from './Cart.module.scss'


const Cart = ({cartItems,removeItemCart}) => {

    // const {cartItems} = useContext(ThemeContext)

    const total = cartItems.reduce((sum, obj) => sum + obj.cost, 0)

    return (
        <div className={styles.cartDrawer}>
            <div className={styles.cart}>
                <h2>Cart</h2>
                <div className={styles.items}>
                    {cartItems.map((obj,idx)=>(
                        <div key={obj.cost+idx} className={styles.item}>
                            <img className={styles.itemImg} src={obj.img} alt=""/>
                            <section className={styles.delNameItem}>
                                <p className={styles.delNameItemP}>{obj.name}</p>
                                <img onClick={()=>removeItemCart(obj.id)} className={styles.delItemCart} src="/img/delItemCart.svg" alt=""/>
                            </section>
                        </div>
                    ))}

                </div>
                <p className={styles.totalCred}>{}Total: {total.toLocaleString()} cred.</p>
                <button className={styles.buttonCheckout}>Checkout</button>
            </div>

        </div>
    );
};

export default Cart;