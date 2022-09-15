import UserContext from './UserContext.js';
import styled from "styled-components"
import { useContext } from "react";
import { useState } from "react";


export default function EveryProducts({...props}){
    const { user, setUser } = useContext(UserContext);
    function veriIten(){
        setUser({...user, product:[...user.product, props.obj] })

    }
    console.log( user)

   
    const price = props.obj.price/100
    return(
        <Every onClick={veriIten}  >
        <img src={props.obj.image} />
        <span >{props.obj.productName}</span>
        <span >$ {price%1===0 ? `${price},00`: `${price}` }</span> 
        </Every>
    )
}

const Every = styled.div`
box-shadow: 5px 3px 10px grey;
display: flex ;
justify-content: center ;
align-items: center ;
flex-wrap: wrap ;
margin: 5px 10px ;
border-radius: 30px ;
width: 90px ;
height: 150px ;
background: #DFDFD5 ;
transition: white 500ms linear;
:hover{
    transform: translateY(5px)   

}
:active{ 
 transform: rotateZ(5deg) ;


}
span{
display: flex ;
justify-content: center ;
align-items: center ;
font-size: 15px ;
width: 100% ;
height: 25px ;

}
img{
    max-width: 70px;
    max-height: 90px ;
}
`;
