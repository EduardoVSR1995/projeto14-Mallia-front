import { useNavigate } from "react-router-dom";
import { Container , Text} from "./Subparts.js"
import styled from "styled-components"


export default function EveryProducts({...props}){
    console.log(props)
    // const navigat = useNavigate()
    // const {date, description, price, extract, _id} = props.obj;
    // let increaseDecrease = `#C70000`;
    // if(extract){
    //     increaseDecrease='#03AC00';
    // }
    // function del(){
    //     deletCont({ headers: { authorization: `Bearer ${_id}` } }).then(sucess);
    // }
    // function sucess(){
    //     if(window.confirm("Deseja apagar este extrato?"))return props.reload();
    // }

    // function edit(){
    //     if(extract) return navigat("/Editar-entrada");
    //     return navigat("/Editar-saida");

    // }
    const price = props.obj.price/100
    return(
        <Every>
        <img src={props.obj.image} />
        <span >{props.obj.productName}</span>
        <span >$ {price%1===0 ? `${price},00`: `${price}` }</span> 
        </Every>
    )
}

const Every = styled.div`
display: flex ;
justify-content: center ;
align-items: center ;
flex-wrap: wrap ;
margin: 0px 10px ;
border-radius: 30px ;
width: 90px ;
height: 150px ;
background: #E7DFD8 ;
span{
display: flex ;
justify-content: center ;
align-items: center ;
font-size: 20px ;
width: 100% ;
height: 25px ;

}
img{
    max-width: 70px;
    max-height: 90px ;
}
`;

