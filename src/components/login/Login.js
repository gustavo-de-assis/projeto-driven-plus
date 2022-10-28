import { Link } from "react-router-dom"
import styled from "styled-components"
import logo from "../../assets/img/driven-plus.png"

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

const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    a{
        font-size: 14px;
        font-weight: 400;
        text-decoration: underline;
        color: #fff;
        margin-top: 25px;
    }
`

const FormStyle = styled.form`
    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;

    
    input, button{
        width: 299px;
        height: 52px;
        border-radius: 8px;
        border: none;
        margin: 8px 36px;
    }

    input::placeholder{
        padding-left: 10px;
    }

    button{
        color: #fff;
        font-weight: 700;
        font-size: 14px;
        background-color: #FF4791;
        :hover{
            cursor: pointer;
            opacity: 0.8;
        }
    }
`
const Logo = styled.div`
    height: 275px;
    
    display: flex;
    justify-content: center;
    align-items: center;
`