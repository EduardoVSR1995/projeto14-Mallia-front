import UserContext from "./parts/UserContext.js";
import { postCartUser } from "./parts/mallia.js";
import {useNavigate} from 'react-router-dom';
import styled from "styled-components";
import { useContext } from "react";

export default function CartItems({ _id ,productName, price, descryption, image, quantity}) {
    const { user, setUser } = useContext(UserContext);
    const navigat = useNavigate()
    const token = JSON.parse(localStorage.getItem('Mallia'));

    
    if(quantity === 0){
        if (user.cont===0) return navigat('/');
        for (let i = 0; i < user.product.length; i++) {   
            if( _id === user.product[i]._id ){
                const aux = [...user.product]
                aux.splice(i,1)
                setUser({...user, product:[...aux]}) 
                return
                }
            }
        }
    
    function less(){
        for (let i = 0; i < user.product.length; i++) {
            if( _id === user.product[i]._id ){
                const obj = {...user.product[i], quantity:user.product[i].quantity-1}
                const aux = [...user.product]
                aux[i] = obj;
                setUser({...user, product:[...aux], cont: user.cont-1, sum: user.sum-price }) 
                user.plusplus(user.sum-price)
                if(token)postCartUser({product:[...aux], cont: user.cont-1 },{ headers: { Authorization: `Bearer ${token}` }}) 


            }        

        }
        
    }

    function plus(){
        for (let i = 0; i < user.product.length; i++) {
            if( _id === user.product[i]._id ){
                const obj = {...user.product[i], quantity:user.product[i].quantity+1}
                const aux = [...user.product]
                aux[i] = obj;
                setUser({...user, product:[...aux],cont: user.cont+1 ,sum: user.sum+price }) 
                user.plusplus(user.sum+price)
                if(token)postCartUser({product:[...aux], cont: user.cont+1 },{ headers: { Authorization: `Bearer ${token}` }}) 

            }
    }}
   
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
                        <box className="ionBox" onClick={plus} ><ion-icon name="add-outline"></ion-icon></box>
                        <box className="ionBox">{quantity}</box>
                        <box className="ionBox" onClick={less} ><ion-icon name="remove-outline"></ion-icon></box>
                    </div>
                    <div>{price%1===0 ?price/100+",00": price/100 }</div>
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