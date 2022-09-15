import styled from "styled-components";
import UserContext from "./parts/UserContext";
import { useState } from "react";

export default function CartItems({productName, price, descryption, image}) {
    
    console.log(image);
    return (
        <CartItemCard>
            <div className="itemWindow">
                <div className="imgBox">
                    <img src={image} alt={productName}></img>
                </div>
                <div className="descBox">
                    <div>
                        {productName}
                    </div>
                    <div>
                        {descryption}
                    </div>
                </div>
                <div>
                    {price}
                </div>
            </div>
        </CartItemCard>
    );
};

const CartItemCard = styled.div`

.itemWindow {
    width: 90%;
    height: 100px;
    background-color: #ffffff;
    font-family: 'Graduate', cursive;
    color: #869187;
    border-radius: 10px;
    margin-left: 30px;
    margin-bottom: 20px;
    padding: 10px 20px 10px 20px;

    display: flex;
    justify-content: space-between;
}
.imgBox {
    height: 80px;
    height: 80px;
}
.imgBox > img {
    height: 80px;
    width: auto;
}
.descBox {
    display: row;
    /* flex-direction: column; */
}
`;