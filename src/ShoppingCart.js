import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import CartItems from "./CartItems";
import UserContext from "../src/parts/UserContext.js";

export default function ShoppingCart() {
    const { user, setUser } = useContext(UserContext);

    const navigat = useNavigate()
    //const { loginInfos } = useContext(UserContext);
    // const token = loginInfos.token;
    // const transactionAuth = { headers: {"auth": "Bearer " + token}};

    const [total, setTotal] = useState("0");
    let sum = 0;

    const cart = user.product;
        
    useEffect(() => {
        cart.forEach(price => {
            for (let i = 0; i < price.quantity; i++) {
                sum = sum + Number(price.price);    
            }
            
        } ) ;
        setUser({...user, plusplus , sum: sum});
        setTotal(sum);
    }, []);
    console.log(cart, user);

    function plusplus(price){
        setTotal(price)
        }


    return (
        <ShoppingCartScreen>
            <div className="header" onClick={()=>navigat('/')} >
                Mallia
            </div>
            <div className="greenBar"></div>
            <div className="title">
                Carrinho de compras
            </div>

            <div className="productsOnCart">
                { !cart ? "" : (cart.map((cart, index) => (
                    <CartItems
                        key={index}
                        _id={cart._id}
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
                    { user.loginInfos  ? <Link to="/signIn" style={{ textDecoration: 'none' }}><div className="smallButton">login</div></Link>
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