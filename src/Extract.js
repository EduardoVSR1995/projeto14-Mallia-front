import UserContext from "./parts/UserContext";
import { Container, Button } from "./parts/Subparts";
import styled from "styled-components";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Extract(){
    const { user, setUser } = useContext(UserContext);
    const navigat = useNavigate()    

  
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
                <span><Button background={"#DFDFD5"} height={'50px'} width={"250px"} onClick={function(){navigat('/' ); setUser({})}} > Confirmar compra </Button></span>
            </AllInfos>
            <h3>
            Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups
            </h3>

      </All>  
    )
}

const AllInfos = styled.div`
margin: 80px ;
 span{
    margin: 10px ;
   
    button{
        border: 2px solid ;
        border-color: #C4C7BF ;
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

        font-size: 18px ;
        margin: 10px ;
        display: flex ;
        justify-content: center ;
        align-items: center ;
        width: 100% ;

        h2{
            font-weight: 400 ;
        }
    
    }
    h1{
        padding: 15px;
        display: flex ;
        align-items: flex-start ;
        justify-content: space-between ;
        font-weight: 400 ;
        font-size: 50px ;
        height: 60px ;
        
    }
    h3{
        padding: 15px;
        display: flex ;
        justify-content: center ;
        align-items: center ;
        font-weight: 400 ;
        border-radius: 10px ;
        margin: -30px 20px ;
        font-size: 10px ;
        width: 300px ;
        height: 70px ;
        background-color: #DFDFD5;
        
    }

`;