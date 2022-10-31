import axios from "axios"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"
import logo from "../../assets/img/driven-plus.png"
import FormStyle from "../../assets/styles/FormStyle"
import LoginContainer from "../../assets/styles/LoginContainer"

export default function Login({setToken}) {
    const [loginInfo, setLoginInfo] = useState({ email: "", password: "" })
    const navigate = useNavigate();
    
    function formHandler(e){
        const {name, value} = e.target;
        setLoginInfo({...loginInfo, [name]:value})
    }

    function logUser(e){

        e.preventDefault();
        const log = {...loginInfo}
        
        const URL = `https://mock-api.driven.com.br/api/v4/driven-plus/auth/login`;
        
        console.log(log);
        
        axios.post(URL, log).then((ans) => {
            alert("Login realizado com sucesso!");
            setToken(ans.data.token)
            if(!ans.data.membership){
                navigate("/subscriptions")
            }else{
                navigate("/home");
            }
        }).catch((err) => {
                alert(err.response.data.message); 
        })

    }

    return (<LoginContainer>
        <Logo>
            <img src={logo} alt="" />
        </Logo>
        <FormStyle onSubmit={logUser}>
            <input
                name="email"
                type="email"
                value={loginInfo.email}
                placeholder="Email"
                onChange={formHandler}
                required />
            <input
                name="password"
                type="password"
                value={loginInfo.password}
                placeholder="Senha"
                onChange={formHandler}
                required />
            <button type="submit">ENTRAR</button>
        </FormStyle>
        <Link to={"/sign-up"}>
            <p>Não possui uma conta? Cadastre-se</p>
        </Link>
    </LoginContainer>)
}

const Logo = styled.div`
    height: 40px;

    margin-bottom: 100px;
    
    display: flex;
    justify-content: center;
    align-items: center;

`