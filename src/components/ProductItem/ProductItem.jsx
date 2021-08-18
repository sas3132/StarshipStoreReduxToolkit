import React, {useState} from 'react';
import styles from './ProductItem.module.scss'


const ProductItem = ({id, name,description,cost,img,addOnCart,itemSearch}) => {

const[onCart, setOnCart]=useState(false)




const addedCartButton = () => {
    addOnCart({id, name,description,cost,img,})
  setOnCart(!onCart)

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
                    <b>Cost: {cost} credits</b>
                    <img onClick={addedCartButton} src={onCart ?"/img/productOnCart.svg":"/img/buttonBuy1.svg"} alt="buy"/>
                </div>
            </div>
        </div>
    );
};

export default ProductItem;
