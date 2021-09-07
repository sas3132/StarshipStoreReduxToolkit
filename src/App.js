import React, {createContext, useEffect, useState} from "react";
import Header from "./components/Header/Header";
import Cart from "./components/Cart/Cart";
import Footer from "./components/Footer/Footer";
import ProductItem from "./components/ProductItem/ProductItem";
import Advertising from "./components/Advertising/Advertising";
import axios from "axios";


// const arr = [
//     {
//         "id": 1,
//         "name": "J-type 327 Nubian royal starship",
//         "description": {"speed":920, "class": "Yacht", "rating": 1.8},
//         "cost": 499999,
//         "img": "/img/productItem4.jpeg"
//     },
//     {
//         "id": 2,
//         "name": "Millennium Falcon",
//         "description": {"speed": 1050, "class": "Light Freighter", "rating": 0.5},
//         "cost": 499999,
//         "img": "/img/productItem.jpg"
//     },
//     {
//         "id": 3,
//         "name": "DS-1 Orbital Battle Station",
//         "description": {"speed": "n/a", "class": "Deep Space Mobile Battlestation", "rating": 4.0},
//         "cost": 1000000000,
//         "img": "/img/productItem2.png"
//     },
//     {
//         "id": 4,
//         "name": "Twin Ion Engine Advanced x1",
//         "description": {"speed": 1200, "class": "Starfighter", "rating": 1.0},
//         "cost": 129999,
//         "img": "/img/productItem3.jpg"
//     },
//     {
//         "id": 5,
//         "name": "T-65 X-wing starfighter",
//         "description": {"speed": 1050, "class": "Starfighter", "rating": 1.0},
//         "cost": 149999,
//         "img": "/img/productItem5.jpg"
//     },
//     {
//         "id": 6,
//         "name": "Lambda-class T-4a shuttle",
//         "description": {"speed": 850, "class": "Armed Government Transport", "rating": 1.0},
//         "cost": 240999,
//         "img": "/img/productItem6.jpg"
//     }
// ]

/*TODO
занятся кнопкой заказа может с отправкой на мыло!
Добавить фавориты а нужны ли, страница заказов тогда прокидывать react-router-dom
 */





export const ThemeContext = createContext({})


function App() {
    const [items, setItems] = useState([])
    const [showCart, setShowCart] = useState(false)
    const [cartItems, setCartItems] = useState([])
    const [searchValue, setSearchValue] = useState('')

    useEffect( () => {

        async function fetchData() {

            try {
                const cartResponse = await axios.get("https://612e1f69d11e5c00175583a2.mockapi.io/cart").then();
                const itemsResponse = await axios.get("https://612e1f69d11e5c00175583a2.mockapi.io/items").then();

                setCartItems(cartResponse.data)
                setItems(itemsResponse.data)
            } catch (err) {
                alert("Ошибка загрузки данных")
                console.error(err)
            }
        }
        fetchData();



    }, [])


    const hideShowCart = () => {
        setShowCart(prev => !prev);
        if (!showCart) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.removeAttribute("style");;
        }
    }

    const addOnCart = async (obj) => {

        try {
            const findItem = cartItems.find((item) => +(item.parentId) === +(obj.id))
            if (findItem) {
                setCartItems(prev => prev.filter(item => +(item.parentId) !== +(obj.id)))
                await axios.delete(`https://612e1f69d11e5c00175583a2.mockapi.io/cart/${findItem.id}`).then();

            } else {
                setCartItems((prev) => [...prev, obj])
                const {data} = await axios.post("https://612e1f69d11e5c00175583a2.mockapi.io/cart", obj).then();
                setCartItems((prev)=> prev.map(item => {
                    if (item.parentId === data.parentId) {
                        return {
                            ...item,
                            id:data.id
                        }
                    }
                    return item;
                }));//prev  берем предыдущий State

            }
        } catch (err) {
            alert("Ошибка добавления данных в корзину")
            console.error(err)
        }

    }

    const removeItemCart = (id) => {
        try {
            axios.delete(`https://612e1f69d11e5c00175583a2.mockapi.io/cart/${id}`).then();
            setCartItems((prev) => prev.filter(i => +(i.id) !== +(id)))
        } catch (err) {
            alert("Ошибка при удалении данных из корзины")
            console.error(err)
        }

    }

    const changeSearchInput = (e) => {

        return (
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
            cartItems.some((obj) => +(obj.parentId) === +(id))


        )
    }


    return (

        <ThemeContext.Provider value={{setCartItems,itemAddOnCart, cartItems}}>
            <div className="wrapper clear">
                {showCart && <Cart showCart={showCart} cartItems={cartItems} removeItemCart={removeItemCart}/>}
                <Header hideShowCart={hideShowCart} changeSearchInput={changeSearchInput} searchValue={searchValue}/>

                <main  className="main">
                    <Advertising/>
                    <div className="productsItems">
                        {itemSearch(items).map((item, idx) => (
                            <ProductItem
                                key={item.cost + idx}
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
