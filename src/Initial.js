import { getCartUser, getProducts, getValidation, postCartUser } from "./parts/mallia.js";
import { Container, Button } from "./parts/Subparts.js";
import EveryProducts from './parts/EveryProducts';
import { ThreeDots } from "react-loader-spinner";
import UserContext from './parts/UserContext.js';
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

        const token = JSON.parse(localStorage.getItem('Mallia'));
        
        if (token) getValidation({ headers: { Authorization: `Bearer ${token}` }}).catch(function(i){
            alert("Usuario deslogado");
            localStorage.clear();
        }).then(function(i){

            getCartUser({ headers: { Authorization: `Bearer ${token}` }}).then( value => setUser({...user, ...i.data ,...value.data }))
            
            if (!user.cont){
 
                 setUser({ ...user, ...i.data, product: [], cont: 0 })
            
                }
                postCartUser({product: user.product ,cont: user.cont },{ headers: { Authorization: `Bearer ${token}` }}) 

        });
 
        if (!user.product) setUser({ ...user, product: [], cont: 0 });

        getProducts({ headers: { Authorization: `Bearer ${user.token}` } }).catch(err).then(sucess);         

    }, [])
    
    function sucess(value) {
        setInitial({ ...initial, list: value.data, rolinit: 0, rolend: value.data.length, rol: 11 });
    }
    function err(value) {

        alert(value.data)
    
    }
    function rolPlus(){

        if (initial.rol < initial.rolend) setInitial({ ...initial, rolinit: initial.rolinit + 11, rol: initial.rol + 11 })

    }
    function rolLess() {
    
        if (initial.rol > 0 && initial.rolinit > 0) setInitial({ ...initial, rolinit: initial.rolinit - 11, rol: initial.rol - 11 })
    
    }

    function transitio() {

        if(!user.name) return navigat('/signIn');
        
        if (window.confirm('Deseja sair da sua conta')) {
    
            localStorage.clear()
    
            setUser({});
    
            navigat('/signIn')

        }
        
    }

    return (

        <All>
            <Container background={'#E7DFD8'} height={'80px'} > <h1> Mallia  <img src={logo} /><p><Button onClick={transitio}> {user.name ? `${user.name[0].toUpperCase()}${user.name.substr(1)}` : 'Login'} </Button> <Button onClick={() => navigat('/shoppingCart')} ><img src={image} /> &nbsp; {user.cont} </Button></p></h1>  </Container>
            <Container background={'#DFDFD5'} height={'10px'}></Container>
            <h1>
                <Container width={'30%'} > Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</Container>
                <Container width={'35%'} > Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</Container>
            </h1>
            <Part>
                <Button background={"#E6E6E6"} height={'100%'} width={'10%'} onClick={rolLess} > <img src={left} /> </Button>
                <AllContainer>

                    {!initial.list ? <ThreeDots color="#ffffff" height={100} width={500} /> : initial.list.map(function (value, index) { if (index >= initial.rolinit && index <= initial.rol) { return <EveryProducts key={index} obj={value} /> } })}

                </AllContainer >
                <Button background={"#E6E6E6"} height={'100%'} width={'10%'} onClick={rolPlus} > <img src={reigth} /> </Button>
            </Part>
        </All >
    )


}

const Part = styled.div`
justify-content: space-between ;
align-items:flex-start ;
background: #E6E6E6 ;
max-height: 650px ;
margin: 35px 0px ;
display: flex ;
height: 60vh ;
width: 100% ;
button{
    img{
        filter:opacity(0.3) drop-shadow(0 0 0 #DFDFD5);
        height: 40px ;
        width: 20px ;
    }
}

`;

const AllContainer = styled.div`
::-webkit-scrollbar { display: none; }
justify-content: center ;
background: #E6E6E6 ;
max-height: 650px ;
overflow: scroll ;
flex-wrap: wrap ;
color: #869187 ;
display: flex ;
height: 62vh ;
width: 80% ;
`;


const All = styled.div`
    color: #869187;
    width: 100%;
    h1{
        justify-content: space-between ;
        align-items: flex-start ;
        font-weight: 400 ;
        display: flex ;
        padding: 15px;

    }

    div>h1{
        justify-content: space-between ;
        align-items: flex-start ;
        font-weight: 400 ;
        font-size: 50px ;
        display: flex ;
        height: 60px ;
        p{
            width: 200px ;
            display: flex ;
            justify-content: space-between ;
        }

        img{
            
            width: 180px ;
        }
        Button{
            color: #869187 ; 
            height: 40px ;
            width: 80px ;
            img{
                width: 25px ;
                filter:opacity(0.3) drop-shadow(0 0 0 #DFDFD5);

                
            }
        }
        
    }

`;