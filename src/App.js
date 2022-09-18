import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserContext from './parts/UserContext';
import ShoppingCart from "./ShoppingCart.js";
import ResetStyled from './reset/reset';
import styled from 'styled-components';
import Register from './Register.js';
import Extract from './Extract.js';
import { useState } from "react";
import Initial from './Initial';
import Login from './Login.js';

export default function App() {
    const [user, setUser] = useState([]); 
    return (
        <>
            <UserContext.Provider value={{ user, setUser }}>
                <ResetStyled />
                <Wrapper>
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<Initial />} />
                            <Route path="/register" element={<Register />} />
                            <Route path="/shoppingCart" element={<ShoppingCart />} />
                            <Route path="/signIn" element={<Login user={user} />} />
                            <Route path='/cheCkout' element={<Extract/>} />
                        </Routes>
                    </BrowserRouter>
                </Wrapper>
            </UserContext.Provider>
        </>
    );
}


const Wrapper = styled.div`
    background-color: #E6E6E6 ;
    display: flex;
    justify-content: center ;
    height: 100vh;
`;