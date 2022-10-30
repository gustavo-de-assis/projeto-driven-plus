import { useState } from "react"
import { Link } from "react-router-dom"
import FormStyle from "../../assets/styles/FormStyle"
import LoginContainer from "../../assets/styles/LoginContainer"

export default function Signup() {
    const [userInfo, setUserInfo] = useState({
        name: "",
        email: "",
        password: "",
        cpf: ""
    })

    function signUser(e){
        e.preventDefault();
        const cadastro = {...userInfo}

        console.log(cadastro);
    }

    function formHandler(e){
        const {name, value} = e.target;
        setUserInfo({...userInfo, [name]:value})
    }

    return (
        <LoginContainer>
            <FormStyle onSubmit={signUser}>
                <input
                    name="name"
                    type="text"
                    value={userInfo.name}
                    placeholder="Nome"
                    onChange={formHandler}
                    required />
                <input
                    name="cpf"
                    type="text"
                    value={userInfo.cpf}
                    placeholder="CPF"
                    onChange={formHandler}
                    required />
                <input
                    name="email"
                    type="email"
                    value={userInfo.email}
                    placeholder="Email"
                    onChange={formHandler}
                    required />
                <input
                    name="password"
                    type="password"
                    value={userInfo.password}
                    placeholder="Senha"
                    onChange={formHandler}
                    required />

                <button type="submit" >CADASTRAR</button>
            </FormStyle>
            <Link to={"/"}>Já possui conta? Entre</Link>
        </LoginContainer>
    )
}

