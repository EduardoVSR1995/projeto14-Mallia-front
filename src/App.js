import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserContext from './parts/UserContext';
import ResetStyled from './reset/reset';
import styled from 'styled-components'
import { useState } from "react";
import Initial from './Initial';
import Register from './Register';
import Login from './Login';

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
                            <Route path="/signIn" element={<Login setUser={setUser} user={user} />} />
                            {/* <Route path='/Extrato' element={<Extract/>} /> */}
                            {/* <Route path='/Novo-gasto' element={<NewValue optional={false} />} /> */}
                            {/* <Route path='/Novo-recebido' element={<NewValue optional={true} />} />  */}
                            {/* <Route path='/Editar-entrada' element={<ModifiValue optional={true} />} />  */}
                            {/* <Route path='/Editar-saida' element={<ModifiValue optional={false} />} />  */}
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