import FormStyle from "../../assets/styles/FormStyle"
import logo from "../../assets/img/plano-logo.png"
import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function SubscriptionForm({token}){
    const { idSubscription } = useParams();

    const [planData, setPlanData] = useState([]);
    const [paymentData, setPaymentData] = useState({
        cardName: "",
        cardNumber: "",
        cvv: "",
        expiration: ""
    })

    useEffect(() => {
        const URL = `https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships/${idSubscription}`;
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        axios.get(URL, config)
            .then((ans) => setPlanData(ans.data))
            .catch((err) => console.log(err.response.data.message))
    }, []);


    function formHandler(e){
        const {name, value} = e.target;
        setPaymentData({...paymentData, [name]:value})
    }
    function signPlan(){
        
    }
    if(planData === []){
        return <>
            Carregando
        </>
    }

    console.log("Dados", planData);
   return(<>
        <p> retornar </p>
        <LogoStyle>
            <img src={logo} alt=""/>
            <p>{planData.name}</p>
        </LogoStyle>
        <PlanInfo>
            <div>
                <p>Benefícios:</p>
            </div>
                {planData.perks.map((perk)=> <p key={perk.id}>{perk.title}</p>)}
            <div>
                <p>Preço:</p>
            </div>
                <p>R$ {planData.price} cobrados mensalmente</p>

        </PlanInfo>
        <FormStyle onSubmit={signPlan}>
            <input 
                name="cardName"
                type="text"
                value={paymentData.cardName}
                placeholder="Nome impresso no cartão"
                onChange={formHandler}
                required/>
            <input 
                name="cardNumber"
                type="text"
                value={paymentData.cardNumber}
                placeholder="Dígitos do cartão"
                onChange={formHandler}
                required/>
             <div>
                <input 
                    name="cvv"
                    type="text"
                    value={paymentData.cvv}
                    placeholder="Código de segurança"
                    onChange={formHandler}
                    required/>
                <input 
                    name="expiration"
                    type="text"
                    value={paymentData.expiration}
                    placeholder="Validade"
                    onChange={formHandler}
                    required/>
             </div>
            <button type='submit'>ASSINAR</button>
        </FormStyle>
    </>)
}

const LogoStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 85px auto 22px auto;
    img{
        width: 140px;
        height: 95px;
    }
    
    p{
        color: #fff;
        font-size: 36px;
        font-weight: 700;
        margin-top: 12px;
    }
`
const PlanInfo = styled.div`
    padding-left: 36px;
    color:#fff;
    div{
        display: flex;
        flex-direction: row;
    }
`