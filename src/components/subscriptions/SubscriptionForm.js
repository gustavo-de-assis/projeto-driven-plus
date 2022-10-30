import FormStyle from "../../assets/styles/FormStyle"
import logo from "../../assets/img/plano-logo.png"
import { useState } from "react";
import styled from "styled-components";

export default function SubscriptionForm(){
   
    const [paymentData, setPaymentData] = useState({
        cardName: "",
        cardNumber: "",
        cvv: "",
        expiration: ""
    })


    function formHandler(e){
        const {name, value} = e.target;
        setPaymentData({...paymentData, [name]:value})
    }

   return(<>
        <p> retornar </p>
        <LogoStyle>
            <img src={logo} alt=""/>
            <p>Driven Plus</p>
        </LogoStyle>
        <PlanInfo>
            
        </PlanInfo>
        <FormStyle>
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
`