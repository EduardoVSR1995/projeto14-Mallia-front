import UserContext from './UserContext.js';
import styled from "styled-components"
import { useContext } from "react";


export default function EveryProducts({...props}){
    const { user, setUser } = useContext(UserContext);
    function veriIten(){
        for (let i = 0; i < user.product.length; i++) {
            if( props.obj._id === user.product[i]._id ){
                const obj = {...user.product[i], quantity:user.product[i].quantity+1}
                const aux = [...user.product]
                aux[i] = obj;
                setUser({...user, product:[...aux], cont: user.cont+1 }) 
                return
            }
    
        }
        
        setUser({...user, product:[...user.product, {...props.obj, quantity:1 } ], cont: user.cont+1 })
    }

    const price = props.obj.price/100
    return(
        <Every onClick={veriIten}  >
        <Img><img src={props.obj.image} /></Img>
        <span >{props.obj.productName}</span>
        <span >$ {price%1===0 ? `${price},00`: `${price}` }</span> 
        </Every>
    )
}
const Img = styled.div`
    display: flex ;
    justify-content: center ;
    width:120px ;
    height: 80px ;
    img{
    max-width: 90px;
    max-height: 90px ;
}

`;


const Every = styled.div`
box-shadow: 5px 3px 10px grey;
display: flex ;
justify-content: center ;
flex-wrap: wrap ;
margin: 5px 10px ;
border-radius: 30px ;
width: 150px ;
height: 180px ;
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
align-items: start ;
font-size: 15px ;
width: 95% ;
height: 40px ;

}

`;

