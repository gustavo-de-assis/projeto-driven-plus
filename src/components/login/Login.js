import { Link } from "react-router-dom"
import styled from "styled-components"
import logo from "../../assets/img/driven-plus.png"
import FormStyle from "../../assets/styles/FormStyle"
import LoginContainer from "../../assets/styles/LoginContainer"

export default function Login() {
    return (<LoginContainer>
        <Logo>
            <img src={logo} alt="" />
        </Logo>
        <FormStyle>
            <input type="email" placeholder="Email"></input>
            <input type="password" placeholder="Senha"></input>
            <button>ENTRAR</button>
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