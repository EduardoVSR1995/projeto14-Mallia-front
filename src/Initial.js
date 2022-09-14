import { Container, Button, Text } from "./parts/Subparts";
import styled from 'styled-components'
import logo from './imags/logo.png'
import image from './imags/image.png'

export default function Initial() {


    return (
        <All>
            <Container background={'#E7DFD8'} height={'80px'} > <h1> Mallia  <img src={logo} /><h2><Button> Login </Button> <Button><img src={image}/> &nbsp; {'0'} </Button></h2></h1>  </Container>
            <h1>
            <Container width={'35%'} > Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</Container>
            <Container width={'40%'} > Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</Container>
            </h1>
            <Container>
                
            </Container>
        </All>
    )


}

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
        h2{
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