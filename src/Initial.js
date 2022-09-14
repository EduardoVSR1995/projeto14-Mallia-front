import { Container, Button } from "./parts/Subparts.js";
import EveryProducts from './parts/EveryProducts'
import styled from 'styled-components'
import logo from './imags/logo.png'
import image from './imags/image.png'
import { useEffect } from "react";
import { getProducts } from "./parts/mallia.js";
import { useState } from "react";
import left from './imags/passarL.svg'
import reigth from './imags/passarR.svg'
import { useContext } from "react";
import UserContext from './parts/UserContext.js';


export default function Initial() {
    const { user, setUser } = useContext(UserContext);
    const [initial, setInitial] = useState({})
    useEffect(() => {
        setUser({...user, product:[]})
        getProducts({ headers: { Authorization: `Bearer 0a3606b2-d115-4f7e-97e8-16c227a49105` } }).catch(err).then(sucess);
    }, [])
    function sucess(value) {
        setInitial({ ...initial, list: value.data });
    }
    function err(value) {
        alert(value.data)
    }

    console.log(user)

    return (

        <All>
            <Container background={'#E7DFD8'} height={'80px'} > <h1> Mallia  <img src={logo} /><p><Button> Login </Button> <Button><img src={image} /> &nbsp; { !user.product ? '0' : user.product.length} </Button></p></h1>  </Container>
            <h1>
                <Container width={'30%'} > Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</Container>
                <Container width={'35%'} > Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</Container>
            </h1>
            <Part>
                <Button background={"#C4C7BF"} height={'100px'} width={'50px'} > <img src={left} /> </Button>
                <AllContainer>

                    {!initial.list ? 'LOADING...' : initial.list.map(function (value, index) { if (index < 22) { return <EveryProducts key={index} obj={value}></EveryProducts> } })}

                </AllContainer >
                <Button background={"#C4C7BF"} height={'100px'} width={'50px'}> <img src={reigth} /> </Button>
            </Part>
        </All >
    )


}

const Part = styled.div`

margin: 110px 10px ;
display: flex ;
height: 55% ;
width: 98% ;
button{
    img{
        width: 20px ;
        height: 40px ;
    }
}

`;


const AllContainer = styled.div`
display: flex ;
justify-content: center ;
flex-wrap: wrap ;
overflow: auto ;
::-webkit-scrollbar { display: none; }

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