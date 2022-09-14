import { Container, Button } from "./parts/Subparts.js";
import EveryProducts from './parts/EveryProducts'
import styled from 'styled-components'
import logo from './imags/logo.png'
import image from './imags/image.png'
import { useEffect } from "react";
import { getProducts } from "./parts/mallia.js";
import { useState } from "react";


export default function Initial() {
    const [initial, setInitial] = useState({})
    useEffect(() => {
        getProducts({ headers: { Authorization: `Bearer 0a3606b2-d115-4f7e-97e8-16c227a49105` } }).catch(err).then(sucess);
    }, [])
    function sucess(value) {
        setInitial({ ...initial, list: value.data });
    }
    function err(value) {
        alert(value.data)
    }


    return (
        <All>
            <Container background={'#E7DFD8'} height={'80px'} > <h1> Mallia  <img src={logo} /><p><Button> Login </Button> <Button><img src={image} /> &nbsp; {'0'} </Button></p></h1>  </Container>
            <h1>
                <Container width={'35%'} > Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</Container>
                <Container width={'40%'} > Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</Container>
            </h1>
            <AllContainer>
                {!initial.list ? 'LOADING...': initial.list.map(function(value, index){if(index<22){ return <EveryProducts key={index} obj={value}></EveryProducts> }}) }
            </AllContainer>
        </All>
    )


}
const AllContainer= styled.div`
margin: 110px 0px 0px 50px ;
display: flex ;
flex-wrap: wrap ;
height: 55% ;

`;


const All = styled.div`
    width: 100%;
    h1{
        display: flex ;
        align-items: flex-start ;
        justify-content: space-between ;
        font-weight: 400 ;

    }

    div>h1{
        display: flex ;
        align-items: flex-start ;
        justify-content: space-between ;
        font-weight: 400 ;
        font-size: 50px ;
        height: 60px ;
        p{
            display: flex ;
            justify-content: space-between ;
            width: 200px ;
        }

        img{
            
            width: 200px ;
        }
        Button{
            width: 80px;
            height: 40px ;
            img{
                width: 25px ;
            }
        }
        
    }

`;