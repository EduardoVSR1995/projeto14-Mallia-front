import UserContext from "./parts/UserContext.js";
import styled from "styled-components";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import { useContext } from "react";
import { postRegister } from "./parts/mallia.js";

export default function Register() {
    const { user } = useContext(UserContext);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [userPasswordConfirmation, setUserPasswordConfirmation] = useState("");

    function validation() {
        if (userName === "") {
            alert("Favor inserir seu nome.");
        };
        if (userEmail === "") {
            alert("Favor inserir seu email.");
        };
        if (userPassword === "") {
            alert("Favor inserir sua senha.");
        };
        if (userPasswordConfirmation === "") {
            alert("Favor confirmar a senha.");
        };
        if (userPassword !== userPasswordConfirmation) {
            alert("Senha e a confirmação não são as mesmas.");
        };
        if (userName !== "" && userEmail !== "" && userPassword !== "" && userPassword === userPasswordConfirmation) {
            return true;
        };
        return false;
    };

    function register(e) {
        e.preventDefault();

        const register = {
            name: userName,
            email: userEmail,
            password: userPassword
        }
        
        const validate = validation();
        if (validate === true) {
            setLoading(false);

            postRegister(register).then((res) => {
                localStorage.clear();
                localStorage.setItem('Mallia', JSON.stringify(res.data.token));
                if(user.cont===0) return navigate("/");
                navigate("/shoppingCart")
                alert("Usuário criado com sucesso");
            }).catch((error) => {
                if (error.response.status === 409) {
                    alert("Email em uso, favor utilizar outro.");
                };
                setLoading(true);
            });
        };     
    };

    return (
        <RegisterScreen>
            <div className="header">
                Mallia
            </div>
            <div className="greenBar"></div>
            <div className="title">
                cadastro
            </div>

            <form onSubmit={register} className="form">
                <input
                    className="inputBar"
                    placeholder="Nome"
                    type="name"
                    value={userName}
                    onChange={e => setUserName(e.target.value)}
                    disabled = {(loading) ? "" : "disabled"}
                />
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
                <input
                    className="inputBar"
                    placeholder="Confirme a senha"
                    type="password"
                    value={userPasswordConfirmation}
                    onChange={e => setUserPasswordConfirmation(e.target.value)}
                    disabled={(loading) ? "" : "disabled"}
                />

                {(loading) ? <button type="submit" className="inputBar button">Cadastrar</button>
                : <button className="inputBar button"><ThreeDots color="#ffffff" height={40} width={40} /></button>}
                <Link to="/signIn"><div className="link">Já tem uma conta? Entre agora!</div></Link>
            </form>
        </RegisterScreen>
    );
};

const RegisterScreen = styled.div`
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
    background-color: #E6E6E6;
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