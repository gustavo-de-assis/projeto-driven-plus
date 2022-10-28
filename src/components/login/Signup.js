import { Link } from "react-router-dom"
import FormStyle from "../../assets/styles/FormStyle"
import LoginContainer from "../../assets/styles/LoginContainer"

export default function Signup() {
    return (
    <LoginContainer>
        <FormStyle>
            <input type="text" placeholder="Nome"></input>
            <input type="text" placeholder="CPF"></input>
            <input type="email" placeholder="Email"></input>
            <input type="password" placeholder="Senha"></input>
            <button>CADASTRAR</button>
        </FormStyle>
        <Link to={"/"}>Já possui conta? Entre</Link>
    </LoginContainer>)
}

