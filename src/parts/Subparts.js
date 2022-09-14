import styled from "styled-components";
import { Link } from "react-router-dom";
import '@compai/font-graduate'

function Container({...props}){
    return(
        <Contai {...props}> {props.children}</Contai>
    )   
}
const Contai = styled.div`
    padding: 15px;
    background: ${props => props.background };
    border-radius: 5px;
    width:${props => props.width } ;
    height:${props => props.height } ;
    font-family: graduate ;

`;
function Heade({...props}){
    return(
        <Headers>{props.children} </Headers>
    )

}
const Headers = styled.span`
    margin: 20px;
    width: 147px;
    height: 50px;
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 50px;
    color: #FFFFFF;
`;
 

function Button({...props}){
    return(
        <Butto {...props}></Butto>
    )

}
const Butto = styled.button`
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer; 
        border-style: none;
        width: ${props=> props.width};
        height: ${props=> props.heigt};
        background: ${props=> props.background};
        border-radius: 5px;
        font-family:'Raleway' ;
        font-style: normal;
        font-weight: 400;
        font-size: 21px;
        line-height: 26px;
        color: ${props=> props.color};
        opacity: ${(props) => !props.bolean ? 1 : 0.5 };
        transition: background 50ms linear ;
        margin: 7px 0px;
        :active{
            background-color: ${props => '#' + Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, '0')} ;
            transform: translatey(4px);
        }
  
`;

function Linkers({...props}){
    return(
      <Linke> <Link {...props}>{props.children} </Link> </Linke>
    )    
}

const Linke = styled.div`
    margin-top: 25px;
    a{
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 17px;
    color: #FFFFFF;
    }
`;

function Text({...props}){
    return(
        <Tex {...props} >{props.children}</Tex>
    )
}
const Tex = styled.div`
    display: flex;
    height: 15px;
    font-style: normal;
    font-weight:${props=> props.weight ? props.weight: 400 };
    font-size: ${props=> props.font };
    line-height: 25px;
    color: ${props=> props.color };
`;


function Input({...others}){
    return(
        <Inp {...others}/> 
    )
}
const Inp = styled.input`
        cursor: pointer;
        -webkit-box-shadow: ${(props) => !props.background ? "0 0 0 50px white inset" : "0 0 0 50px #F2F2F2 inset" }  ;
        padding: 10px;
        width: 100%;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        height: 58px;
        margin: 7px 0px;
        color:${(props) => !props.background ? "#000000" : "#D4D4D4" };
        opacity: ${(props) => !props.background ? 1 : 0.6 } ;
        font-family: 'Raleway' ;
        font-style: normal;
        font-weight: 400;
        font-size: 21px;
        line-height: 25px;

        ::placeholder{
        font-style: normal;
        font-weight: 400;
        font-size: 21px;
        line-height: 25px;
        color: #000000 ;
        }
        :focus, select:focus {
        border: 1 none;
        outline: 0;
        }    

`;

export { Container, Button ,Text , Input, Linkers, Heade }
