import axios from "axios"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import FormStyle from "../../assets/styles/FormStyle"
import LoginContainer from "../../assets/styles/LoginContainer"

export default function Signup() {
    const [userInfo, setUserInfo] = useState({
        name: "",
        email: "",
        password: "",
        cpf: ""
    })
    const navigate = useNavigate();
    function signUser(e){
        e.preventDefault();
        const cadastro = {...userInfo}
        
        const URL = `https://mock-api.driven.com.br/api/v4/driven-plus/auth/sign-up`;
        
        console.log(cadastro);
        
        axios.post(URL, cadastro).then((ans) => {
            alert("Cadastro realizado com sucesso!");
            navigate("/");
        }).catch((err) => {
                alert(err.response.data.message); 
        })
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

