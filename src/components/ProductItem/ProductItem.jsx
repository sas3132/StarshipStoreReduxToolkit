import React, {useState} from 'react';

const ProductItem = ({id, name,description,cost,img,addOnCart,itemSearch}) => {

const[onCart, setOnCart]=useState(false)




const addedCartButton = () => {
    addOnCart({id, name,description,cost,img,})
  setOnCart(!onCart)

}


    return (
        <div className="productsItem">
            <div className="productsImg">
                <img src={img} alt="imgStarS"/>
            </div>
            <div className="productInfo">
                <b className="productName">{name}</b>
                <p className="productDescription">Speed: {description.speed} km/h<br/>
                    Class: {description.class}<br/>
                    Hyperdrive Rating: {description.rating}
                </p>
                <div className="productButton">
                    <b>Cost: {cost} credits</b>
                    <img onClick={addedCartButton} src={onCart ?"/img/productOnCart.svg":"/img/buttonBuy.svg"} alt="buy"/>
                </div>
            </div>
        </div>
    );
};

export default ProductItem;
