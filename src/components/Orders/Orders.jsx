import React, {useContext, useEffect, useState} from 'react';
import axios from "axios";
import ProductItem from "../ProductItem/ProductItem";
import {ThemeContext} from "../../App";
import styles from './Orders.module.scss'

const Orders = () => {


    const [showOrders, setShowOrders] = useState([])
    const[orderNumber, setOrderNumber] = useState([])

    const {itemSearch} = useContext(ThemeContext)
    useEffect(() => {


        async function fetchOrders() {
            try {
                const {data} = await axios.get("https://612e1f69d11e5c00175583a2.mockapi.io/orders").then();
                // setShowOrders(data.reduce((prev,obj)=> [...prev, ...obj],[]))
                setShowOrders(data)
            } catch (err) {
                console.log("Orders loading error");
            }
        }
        fetchOrders();
    },[])
    console.log(showOrders)

    return (

            (showOrders.length > 0 ? <div className={styles.orders}>

                {showOrders.map((item, idx) => (
                    <>
                        <h2>Order number {item.id + item.date}</h2>
                        <div className="productsItems">

                            {itemSearch(item.item).map((item, idx) => (
                                <ProductItem
                                    key={item.cost + idx}
                                    {...item}
                                    showOrders={showOrders}
                                    // addOnCart={addOnCart}

                                    // addButton={cartItems.some(obj=>obj.id === item.id)}

                                />
                            ))}

                        </div>
                    </>
                ))}
            </div> : <h4>No orders</h4> )

    );
};

export default Orders;