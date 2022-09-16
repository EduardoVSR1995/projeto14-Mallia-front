import styled from "styled-components";

function Container({...props}){
    return(
        <Contai {...props}> {props.children}</Contai>
    )   
}
const Contai = styled.div`
    background: ${props => props.background };
    width:${props => props.width } ;
    height:${props => props.height } ;
    font-family: graduate ;

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
        height: ${props=> props.height};
        background: ${props=> props.background};
        border-radius: 5px;
        font-style: normal;
        font-weight: 400;
        font-size: 15px;
        line-height: 26px;
        opacity: ${(props) => !props.bolean ? 1 : 0.5 };
        margin: 7px 0px;
        :active{
            background-color: #E6E6E6  ;
            transform: translatey(4px);
        }
  
`;

export { Container, Button  }
