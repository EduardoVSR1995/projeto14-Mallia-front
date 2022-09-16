import { Container, Button } from "./parts/Subparts.js";
import EveryProducts from './parts/EveryProducts';
import { ThreeDots } from "react-loader-spinner";
import UserContext from './parts/UserContext.js';
import { getProducts, postSignIn } from "./parts/mallia.js";
import { useNavigate } from "react-router-dom";
import reigth from './imags/passarR.svg';
import left from './imags/passarL.svg';
import styled from 'styled-components';
import image from './imags/image.png';
import logo from './imags/logo.png';
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";


export default function Initial() {
    const { user, setUser } = useContext(UserContext);
    const [initial, setInitial] = useState({})
    const navigat = useNavigate();
   
    useEffect(() => {
        const use = JSON.parse(localStorage.getItem('Mallia'));
        if(use) postSignIn(use).then(function(i){ 
            if(!user.cont){
                setUser({...user, name:i.data.name, token: i.data.token,product: [], cont:0 })
            }
            }).catch(()=> localStorage.clear());

        if (!user.product) setUser({ ...user, product: [], cont:0 });
        getProducts({ headers: { Authorization: `Bearer ${user.token}` } }).catch(err).then(sucess);
    }, [])
    function sucess(value) {
        setInitial({ ...initial, list: value.data, rolinit:0, rolend: value.data.length, rol: 21 });
    }
    function err(value) {
        alert(value.data)
    }
    function rolPlus(){
        if(initial.rol<initial.rolend) setInitial({...initial, rolinit: initial.rolinit+21, rol: initial.rol+21 })

    }
    function rolLess(){
        if(initial.rol>0 && initial.rolinit>0 ) setInitial({...initial, rolinit: initial.rolinit-21, rol: initial.rol-21 })
    }

    function transitio(){
        if(window.confirm('Deseja sair da sua conta')){
            localStorage.clear()
            setUser({});
            navigat('/signIn') 
        }}

    console.log(user)

    return (

        <All>
            <Container background={'#E7DFD8'} height={'80px'} > <h1> Mallia  <img src={logo} /><p><Button onClick={transitio }> {user.name ? `${user.name[0].toUpperCase()}${user.name.substr(1)}` :'Login' } </Button> <Button  onClick={() => navigat('/shoppingCart')} ><img src={image} /> &nbsp; {user.cont} </Button></p></h1>  </Container>
            <Container background={'#DFDFD5'} height={'10px'}></Container>
            <h1>
                <Container width={'30%'} > Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</Container>
                <Container width={'35%'} > Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</Container>
            </h1>
            <Part>
                <Button background={"#E6E6E6"} height={'100px'} width={'50px'} onClick={rolLess} > <img src={left} /> </Button>
                <AllContainer>

                    {!initial.list ? <ThreeDots color="#ffffff" height={100} width={500} /> : initial.list.map(function (value, index) { if ( index >= initial.rolinit && index <= initial.rol  ){ return <EveryProducts key={index} obj={value} /> } })}

                </AllContainer >
                <Button background={"#E6E6E6"} height={'100px'} width={'50px'} onClick={rolPlus} > <img src={reigth} /> </Button>
            </Part>
        </All >
    )


}

const Part = styled.div`
margin: 90px 10px ;
display: flex ;
height: 52% ;
width: 98% ;
button{
    img{
        width: 20px ;
        height: 40px ;
        filter:opacity(0.3) drop-shadow(0 0 0 #DFDFD5);
    }
}

`;

const AllContainer = styled.div`
color: #869187;
display: flex ;
justify-content: center ;
flex-wrap: wrap ;
overflow: auto ;
::-webkit-scrollbar { display: none; }
`;


const All = styled.div`
    color: #869187;
    width: 100%;
    h1{
        padding: 15px;
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
            color: #869187;
            width: 80px;
            height: 40px ;
            img{
                width: 25px ;
                filter:opacity(0.3) drop-shadow(0 0 0 #DFDFD5);

                
            }
        }
        
    }

`;