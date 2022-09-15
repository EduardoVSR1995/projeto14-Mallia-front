import { useContext, useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import CartItems from "./CartItems";
import UserContext from "../src/parts/UserContext.js";

const cart = [
    {
        productName:"xxx",
        price:3200,
        descryption: "bolinha,bolinha,boinha",
        image: 'https://i.imgur.com/iICd88m.png',
        quantity: 2
    },
    {
        productName:"xx",
        price:250,
        descryption: "bolinha,bolinha",
        image: 'https://i.imgur.com/joGPmij.png',
        quantity: 1
    },
    {
        productName:"x",
        price:200,
        descryption: "bolinha",
        image: 'https://i.imgur.com/6xHaChH.png',
        quantity: 5
    },
    {
        productName:"xxx",
        price:3200,
        descryption: "bolinha,bolinha,boinha",
        image: 'https://i.imgur.com/iICd88m.png',
        quantity: 2
    },
    {
        productName:"xx",
        price:250,
        descryption: "bolinha,bolinha",
        image: 'https://i.imgur.com/joGPmij.png',
        quantity: 1
    },
    {
        productName:"x",
        price:200,
        descryption: "bolinha",
        image: 'https://i.imgur.com/6xHaChH.png',
        quantity: 15
    }
];

export default function ShoppingCart() {
    // let loginInfos = {name: "asda"};
    const { loginInfos } = useContext(UserContext);
    // const token = loginInfos.token;
    // const transactionAuth = { headers: {"auth": "Bearer " + token}};

    const [total, setTotal] = useState("0");
    let sum = 0;
    
    useEffect(() => {
        cart.forEach(price => {
            sum = sum + Number(price.price);
        });
        setTotal(sum);
    }, [sum]);
    console.log(total);


    return (
        <ShoppingCartScreen>
            <div className="header">
                Mallia
            </div>
            <div className="greenBar"></div>
            <div className="title">
                Carrinho de compras
            </div>

            <div className="productsOnCart">
                {(cart.map((cart) => (
                    <CartItems
                        productName={cart.productName}
                        price={cart.price}
                        descryption={cart.descryption}
                        image={cart.image}
                        quantity={cart.quantity}
                    />
                )))}
            </div>

            <div className="cartFooter">
                <div className="malliaValuesBox">
                    Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
                </div>
                <div className="totalBox">
                    <div>Total R${total}</div>
                    {(!loginInfos) ? <Link to="/signIn" style={{ textDecoration: 'none' }}><div className="smallButton">login</div></Link>
                    : <Link to="/confirmation" style={{ textDecoration: 'none' }}><div className="smallButton">Finalizar compra</div></Link>}
                </div>
            </div>

        </ShoppingCartScreen>
    );
};

const ShoppingCartScreen = styled.div`
background-color: #E6E6E6;
.header {
    width: 100vw;
    height: 130px;
    background-color: #E7DFD8;
    font-family: 'Graduate', cursive;
    font-size: 50px;
    color: #869187;
    padding-left: 100px;

    display: flex;
    justify-content: flex-start;
    align-items: center;
}
.greenBar {
    background-color: #DFDFD5;
    height: 20px;
    width: 100vw;
}
.title {
    font-family: 'Graduate', cursive;
    font-size: 30px;
    color: #869187;
    margin: 20px 0 20px 0;
    padding-left: 100px;

    display: flex;
    justify-content: flex-start;
    align-items: center;
}
.productsOnCart {
    width: 60vw;
    height: 350px;
    background-color: #DFDFD5;
    font-family: 'Graduate', cursive;
    color: #869187;
    margin-left: 100px;
    padding: 25px;
    border-radius: 10px;
    overflow: auto;
    ::-webkit-scrollbar {
        display: none;
    }
}
.cartFooter {
    display: flex;
}
.malliaValuesBox {
    width: 43%;
    height: 100px;
    margin: 25px 0 0 100px;
    padding: 25px;
    border-radius: 10px;
    background-color: #DFDFD5;
}
.totalBox {
    width: 15%;
    height: 100px;
    margin: 25px 0 0 25px;
    padding: 20px;
    border-radius: 10px;
    background-color: #DFDFD5;
    display: flex;
    align-items: center;
}
.smallButton {
    height: 60px;
    width: 100px;
    background-color: #ffffff;
    padding: 4px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
}
`