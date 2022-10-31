import FormStyle from "../../assets/styles/FormStyle"
import logo from "../../assets/img/plano-logo.png"
import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import retornar from "../../assets/img/retornar.png"
import lista from "../../assets/img/lista.png"
import dinheiro from "../../assets/img/dinheiro.png"

export default function SubscriptionForm({token}){
    const { idSubscription } = useParams();
    const [confirmSub, setConfirmSub] = useState(true)
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
    if(planData.length === 0){
        return <>
            Carregando
        </>
    }

    console.log("Dados", planData);
   return(<SubscriptionLayout>
        <Link to="/plans">
            <img src={retornar} alt=""/>
        </Link>
        <LogoStyle>
            <img src={planData.image} alt=""/>
            <p>{planData.name}</p>
        </LogoStyle>
        <PlanInfo>
            <div>
                <img src={lista} alt=""/>
                <p>Benefícios:</p>
            </div>
                {planData.perks.map((perk,i)=> <p key={perk.id}>{i+1}. {perk.title}</p>)}
            <div>
                <img src={dinheiro} alt=""/>
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
                pattern="\d{16}"
                onChange={formHandler}
                required/>
             <div>
                <input 
                    name="cvv"
                    type="text"
                    value={paymentData.cvv}
                    placeholder="Código de segurança"
                    pattern="\d{3}"
                    onChange={formHandler}
                    required/>
                <input 
                    name="expiration"
                    type="text"
                    value={paymentData.expiration}
                    placeholder="Validade"
                    pattern="^(0[1-9]|1[0-2])\/?([0-9]{2})$"
                    onChange={formHandler}
                    required/>
             </div>
            <button type='submit'>ASSINAR</button>
        </FormStyle>
    </SubscriptionLayout>)
}
const SubscriptionLayout = styled.div`
    a{
        img{
            margin: 25px 0 0 22px;
        }
    }
`
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
        margin: 5px 0;
    }
`