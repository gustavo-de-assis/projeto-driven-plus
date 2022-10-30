import axios from "axios"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import styled from "styled-components"
import Plan from "./Plan"

export default function Subscriptions(){
    const {idSubscription} = useParams();
/*    useEffect(()=>{
        const URL = 'https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships';
        axios.get(URL,{email:'teste@teste.com',password:'123456'})
        .then((ans)=>console.log(ans.data))
        .catch((err)=>console.log(err.response.data.message))
    },[]);*/

    return(<SubscriptionsContainer>
        <p>Escolha seu plano</p>
        <Plan></Plan>       
        <Plan></Plan>       
        <Plan></Plan>       
    </SubscriptionsContainer>)
}
const SubscriptionsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    p{
        color: #fff;
        font-size: 32px;
        font-weight: 700;
        margin: 30px auto 20px auto;
    }
`