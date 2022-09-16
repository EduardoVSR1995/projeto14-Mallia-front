import styled from "styled-components";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import { postSignIn } from "../src/parts/mallia.js";

export default function Login({user , setUser}) {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");

    function login(e) {
        if (userEmail === "") {
            alert("Favor inserir seu email.");
        };
        if (userPassword === "") {
            alert("Favor inserir sua senha.");
        };
        if (userEmail !== "" && userPassword !== "") {
            e.preventDefault();
            setLoading(false);
            
            const login = {
                email: userEmail,
                password: userPassword
            };

            postSignIn(login).then((res) => {
                localStorage.clear();
                localStorage.setItem('Mallia', JSON.stringify(login));
                setUser({...user, name: res.data.name, token: res.data.token });
                if(user.cont===0) return navigate("/");
                navigate("/shoppingCart")
                return ;
            }).catch((error) => {
                if (error.response.status === 401) {
                    alert("Usuário não encontrado, login ou senha incorretos");
                };
                setLoading(true);
            });          
        };        
    };
    console.log(user)
    return(
        <LoginScreen>
            <div onClick={()=> navigate('/')} className="header">
                Mallia
            </div>
            <div className="greenBar"></div>
            <div className="title">
                login
            </div>

            <form onSubmit={login} className="form">
                <input
                    className="inputBar"
                    placeholder="Email"
                    type="email"
                    value={userEmail}
                    onChange={e => setUserEmail(e.target.value)}
                    disabled = {(loading) ? "" : "disabled"}
                />
                <input
                    className="inputBar"
                    placeholder="Senha"
                    type="password"
                    value={userPassword}
                    onChange={e => setUserPassword(e.target.value)}
                    disabled={(loading) ? "" : "disabled"}
                />

                {(loading) ? <button type="submit" className="inputBar button">Entrar</button>
                : <button className="inputBar button"><ThreeDots color="#ffffff" height={40} width={40} /></button>}
            </form>
            <Link to="/register"><div className="link">Primeira vez? Cadastre-se!</div></Link>
        </LoginScreen>
    );
};

const LoginScreen = styled.div`
background-color: #E6E6E6;
a{
    text-decoration: none ;
}
.header {
    width: 100vw;
    height: 180px;
    background-color: #E7DFD8;
    font-family: 'Graduate', cursive;
    font-size: 60px;
    color: #869187;

    display: flex;
    justify-content: center;
    align-items: center;
}
.greenBar {
    background-color: #DFDFD5;
    height: 20px;
    width: 100vw;
}
.title {
    font-family: 'Graduate', cursive;
    font-size: 40px;
    color: #869187;
    margin: 30px 0 30px 0;

    display: flex;
    justify-content: center;
    align-items: center;
}
.inputBar {
    max-width: 350px;
    width: 80vw;
    height: 55px;
    border: 2px solid #A0AEA5;
    border-radius: 5px;
    background: #EAEAEA;
    margin: 5px 0 5px 0;
    font-size: 20px;
    padding-left: 20px;
    padding-right: 20px;
    
    ::-webkit-input-placeholder { /* WebKit, Blink, Edge */
        color: #b3b3b3;
    }
    :-moz-placeholder { /* Mozilla Firefox 4 to 18 */
        color: #b3b3b3;
        opacity:  1;
    }
    ::-moz-placeholder { /* Mozilla Firefox 19+ */
        color: #b3b3b3;
        opacity:  1;
    }
    :-ms-input-placeholder { /* Internet Explorer 10-11 */
        color: #b3b3b3;
    }
    ::-ms-input-placeholder { /* Microsoft Edge */
        color: #b3b3b3;
    }

    ::placeholder { /* Most modern browsers support this now. */
        color: #b3b3b3;
    }
}
.button {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #DFDFD5;
    color: #869187;
    font-weight: 700;
}
.form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.link {
    font-size: 15px;
    font-weight: 700;
    color: #b3b3b3;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
`;