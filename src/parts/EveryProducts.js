import UserContext from './UserContext.js';
import { postCartUser } from './mallia.js';
import styled from "styled-components";
import { useContext } from "react";


export default function EveryProducts({...props}){
    const { user, setUser } = useContext(UserContext);
    const token = JSON.parse(localStorage.getItem('Mallia'));

    function veriIten(){
        for (let i = 0; i < user.product.length; i++) {
            if( props.obj._id === user.product[i]._id ){
                const obj = {...user.product[i], quantity:user.product[i].quantity+1}
                const aux = [...user.product]
                aux[i] = obj;
                setUser({...user, product:[...aux], cont: user.cont+1 })
                if(token) postCartUser({product:[...aux], cont: user.cont+1 },{ headers: { Authorization: `Bearer ${token}` }}) 
                return
            }
    
        }

        setUser({...user, product:[...user.product, {...props.obj, quantity:1 } ], cont: user.cont+1 })
        
        if(token) postCartUser({product:[...user.product, {...props.obj, quantity:1 } ], cont: user.cont+1 },{ headers: { Authorization: `Bearer ${token}` }}) 
        

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
    justify-content: center ;
    display: flex ;
    height: 80px ;
    width:120px ;
    img{
        max-height: 90px ;
        max-width: 90px;
}

`;


const Every = styled.div`
transition: white 500ms linear;
box-shadow: 5px 3px 10px grey;
justify-content: center ;
border-radius: 30px ;
background: #DFDFD5 ;
margin: 5px 10px ;
flex-wrap: wrap ;
height: 180px ;
display: flex ;
width: 150px ;

    :hover{
        transform: translateY(5px)   

    }
    :active{ 
        transform: rotateZ(5deg) ;


    }

    span{
        justify-content: center ;
        align-items: start ;
        font-size: 15px ;
        display: flex ;
        height: 40px ;
        width: 95% ;

    }

`;

