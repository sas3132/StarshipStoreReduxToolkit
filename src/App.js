import React, {createContext, useState} from "react";
import Header from "./components/Header/Header";
import Cart from "./components/Cart/Cart";
import Footer from "./components/Footer/Footer";
import ProductItem from "./components/ProductItem/ProductItem";
import Advertising from "./components/Advertising/Advertising";

const arr = [
    {
        id: 1,
        name: "J-type 327 Nubian royal starship",
        description: {speed:920, class: "Yacht", rating: 1.8},
        cost: 499999,
        img: "/img/productItem4.jpeg"
    },
    {
        id: 2,
        name: "Millennium Falcon",
        description: {speed: 1050, class: "Light Freighter", rating: 0.5},
        cost: 499999,
        img: "/img/productItem.jpg"
    },
    {
        id: 3,
        name: "DS-1 Orbital Battle Station",
        description: {speed: "n/a", class: "Deep Space Mobile Battlestation", rating: 4.0},
        cost: 1000000000,
        img: "/img/productItem2.png"
    },
    {
        id: 4,
        name: "Twin Ion Engine Advanced x1",
        description: {speed: 1200, class: "Starfighter", rating: 1.0},
        cost: 129999,
        img: "/img/productItem3.jpg"
    },
    {
        id: 5,
        name: "T-65 X-wing starfighter",
        description: {speed: 1050, class: "Starfighter", rating: 1.0},
        cost: 149999,
        img: "/img/productItem5.jpg"
    },
    {
        id: 6,
        name: "Lambda-class T-4a shuttle",
        description: {speed: 850, class: "Armed Government Transport", rating: 1.0},
        cost: 240999,
        img: "/img/productItem6.jpg"
    }
]
export const  ThemeContext = createContext({})


function App() {
    const [showCart, setShowCart] = useState(false)
    const [cartItems,setCartItems] = useState([])
    const [searchValue, setSearchValue] = useState('')





    const hideShowCart = () => setShowCart(prev => !prev);

    const addOnCart = (obj) => {

        if(cartItems.find((item) => item.id === obj.id)){
            setCartItems(prev=> prev.filter(item=>item.id !== obj.id))

        }else{
            setCartItems(prev => [...prev, obj])
        }

    }

    const removeItemCart = (id) => {
        setCartItems((prev)=>prev.filter(i=>i.id !== id))

    }

    const changeSearchInput = (e) => {

        return(
            setSearchValue(e.target.value)

        )
    }

    const itemSearch = (items) => {
        return (
            items.filter((item) => (item.name.toLowerCase().includes(searchValue.toLowerCase())))
        )
    }

    const itemAddOnCart = (id) => { //контекст на изменение кнопки после удаления из корзины
      return (
          cartItems.some((obj) => obj.id === id)


      )
    }




    return (

        <ThemeContext.Provider value={{itemAddOnCart}}>
        <div className="wrapper clear">
            {showCart && <Cart cartItems={cartItems} removeItemCart={removeItemCart}/>}
            <Header hideShowCart={hideShowCart} changeSearchInput={changeSearchInput} searchValue={searchValue}/>

            <main className="main">
                <Advertising/>
                <div className="productsItems">
                    {itemSearch(arr).map((item,idx)=>(
                        <ProductItem
                            key={item.cost+idx}
                            {...item}
                            addOnCart={addOnCart}

                            // addButton={cartItems.some(obj=>obj.id === item.id)}

                        />
                    ))}

                </div>
            </main>
            <Footer/>
        </div>
        </ThemeContext.Provider>
    );
}

export default App;
