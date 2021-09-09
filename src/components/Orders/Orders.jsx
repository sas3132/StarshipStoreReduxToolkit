import React, {useContext, useEffect, useState} from 'react';
import axios from "axios";
import ProductItem from "../ProductItem/ProductItem";
import {ThemeContext} from "../../App";
import styles from './Orders.module.scss'

const Orders = () => {


    const [showOrders, setShowOrders] = useState([])

    const {itemSearch} = useContext(ThemeContext)
    useEffect(() => {


        async function fetchOrders() {
            const {data} = await axios.get("https://612e1f69d11e5c00175583a2.mockapi.io/orders").then();
            setShowOrders(data.reduce((prev,obj)=> [...prev, ...obj.item],[]))
        }
        fetchOrders();
    },[])
    console.log(showOrders)

    return (
        <div className={styles.productsItems}>
            {showOrders.map((item, idx) => (
                <h3>{item.name}</h3>
            ))}
        </div>

    );
};

export default Orders;