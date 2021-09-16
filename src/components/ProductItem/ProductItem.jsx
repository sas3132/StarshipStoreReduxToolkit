import React, {useContext, useState} from 'react';
import styles from './ProductItem.module.scss'
import {ThemeContext} from "../../App";


const ProductItem = ({id, name,description,cost,img,addOnCart,showOrders}) => {

// const[onCart, setOnCart]=useState(addButton)
const {itemAddOnCart} = useContext(ThemeContext)



const addedCartButton = () => {
    addOnCart({id,parentId:id, name,description,cost,img,})
  // setOnCart(!onCart)

}


    return (

        <div className={styles.productsItem}>
            <div className={styles.productsImg}>
                <img src={img} alt="imgStarS"/>
            </div>
            <div className={styles.productInfo}>
                <b className={styles.productName}>{name}</b>
                <p className={styles.productDescription}>Speed: {description.speed} km/h<br/>
                    Class: {description.class}<br/>
                    Hyperdrive Rating: {description.rating}
                </p>
                <div className={styles.productButton}>
                    <b>Cost: {cost.toLocaleString()} credits</b>
                    {showOrders ? null : <img onClick={()=>addedCartButton()} src={itemAddOnCart(id) ?"img/productOnCart.svg":"img/buttonBuy1.svg"} alt="buy"/>}
                </div>
            </div>
        </div>
    );
};

export default ProductItem;
