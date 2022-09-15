import styled from "styled-components";
import UserContext from "./parts/UserContext";
import { useState } from "react";


export default function CartItems({productName, price, descryption, image, quantity}) {
   return (
        <CartItemCard>
            <div className="itemWindow">
                <div className="imgBox">
                    <img src={image} alt={productName}></img>
                </div>
                <div className="nameDescryptionBox">
                    <div>
                        {productName}
                    </div>
                    <div>
                        {descryption}
                    </div>
                </div>
                <div className="priceQuantityBox">
                    <div>
                        <box className="ionBox"><ion-icon name="add-outline"></ion-icon></box>
                        <box className="ionBox">{quantity}</box>
                        <box className="ionBox"><ion-icon name="remove-outline"></ion-icon></box>
                    </div>
                    <div>{price}</div>
                </div>
            </div>
        </CartItemCard>
    );
};

const CartItemCard = styled.div`

.itemWindow {
    width: 90%;
    height: 100px;
    background-color: #F0F0F0;
    font-family: 'Graduate', cursive;
    border-radius: 10px;
    margin-left: 30px;
    margin-bottom: 15px;
    padding: 10px 20px 10px 20px;

    display: flex;
    justify-content: space-between;
}
.imgBox {
    height: 80px;
    width: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.imgBox > img {
    height: 80px;
}
.nameDescryptionBox {
    width: 70%;
    color: #869187;
}
.nameDescryptionBox > div {
    margin-top: 10px;
}
.priceQuantityBox {
    margin-top: 15px;
    height: 60px;
    width: 60px;
}
.priceQuantityBox > div {
    margin-bottom: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.ionBox {
    border: 2px solid #DFDFD5;
    border-radius: 5px;
    margin: 2px 2px 2px 2px;
}
ion-icon {
    height: 15px;
    width: 15px;
    color: #DFDFD5;
}
`;