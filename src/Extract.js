import { Container, Button } from "./parts/Subparts";
import { useNavigate } from "react-router-dom";
import UserContext from "./parts/UserContext";
import styled from "styled-components";
import { useContext} from "react";

import { postSaleConfirmation } from "./parts/mallia.js";

export default function Extract(){
    const { user, setUser } = useContext(UserContext);
    const navigat = useNavigate()    

    function postSale() {
        const cart = {
            products: user.product
        };
        const token = user.token;
        const saleAuth = { headers: {"auth": "Bearer " + token}};

        postSaleConfirmation(cart, saleAuth).then(() => {
            setUser({ ...user, product: [], cont:0 });
            alert("Compra realizada com sucesso!");
            navigat('/');
        }).catch(() => {
            alert("Compra realizada com sucesso!");
        });        
    };
  
    return(
      <All>
            <Container background={'#E7DFD8'} height={'80px'} > <h1> Mallia </h1>  </Container>
            <Container background={'#DFDFD5'} height={'10px'}></Container>
            <span> Confirmação de compra</span>            

            <AllInfos>
                <span> Nome: {user.name}</span>
                <span>Email: {user.email}</span>
                <span> Nome dos produtos: {user.product.map(value => {return <h2> {value.productName} </h2> })}</span>
                <span>Total de produtos: {user.cont}</span>
                <span><Button background={"#DFDFD5"} height={'50px'} width={"250px"} onClick={postSale} > Confirmar compra </Button></span>
            </AllInfos>
            <h3>
                Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups
            </h3>

      </All>  
    )
}

const AllInfos = styled.div`
background-color: #E6E6E6;
margin-top: 40px ;
height:100vh ;


 span{
    margin: 10px ;
   
    button{
        border-color: #C4C7BF ;
        border: 2px solid ;
        margin-top: 40px ;

    }
    h2{
        margin: 5px ;
    }
}

`;

const All = styled.div`
    color: #869187;
    width: 100%;
    span{

        justify-content: center ;
        align-items: center ;
        font-size: 18px ;
        display: flex ;
        margin: 10px ;
        width: 100% ;

        h2{
            font-weight: 400 ;
        }
    
    }
    h1{
        justify-content: space-between ;
        align-items: flex-start ;
        font-weight: 400 ;
        font-size: 50px ;
        display: flex ;
        padding: 15px;
        height: 60px ;
        
    }
    h3{
        background-color: #DFDFD5;
        justify-content: center ;
        align-items: center ;
        border-radius: 10px ;
        margin: -90px 20px ;
        font-weight: 400 ;
        font-size: 10px ;
        padding: 15px;
        width: 300px ;
        height: 70px ;
        
    }

`;