import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import styled from "styled-components"
import Plan from "./Plan"

export default function Subscriptions({token}) {
    const [plans, setPlans] = useState([]);

    useEffect(() => {
        const URL = 'https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships';
        //const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAwMSwiaWF0IjoxNjY3MTg0NTQxfQ.bygLNrXPrKk3CqBc8kbxmxv3OU4OUBR_QJqUOB3rv24";
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        axios.get(URL, config)
            .then((ans) => setPlans(ans.data))
            .catch((err) => console.log(err.response.data.message))
    }, []);

    if(plans === []){
        return(
            <>Carregando</>
        )
    }

    console.log('Planos', plans)
    return (<SubscriptionsContainer>
        <p>Escolha seu plano</p>
        {plans.map((p) => <Plan
            key={p.id}
            image={p.image}
            price={p.price} />)}
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