import styled from "styled-components";

import CartItems from "./CartItems";

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
        quantity: 5
    }
];

export default function ShoppingCart() {


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

        </ShoppingCartScreen>
    );
};

const ShoppingCartScreen = styled.div`
background-color: #E6E6E6;
.header {
    width: 100vw;
    height: 150px;
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
    height: 400px;
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
`