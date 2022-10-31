import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import AuthContext from "../../contexts/AuthContext"
import Plan from "./Plan"

export default function Subscriptions () {
    const {token} = useContext(AuthContext);
    const [plans, setPlans] = useState([]);

    useEffect(() => {
        const URL = 'https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships';
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        axios.get(URL, config)
            .then((ans) => setPlans(ans.data))
            .catch((err) => console.log(err.response.data.message))
    }, []);

    if (plans === []) {
        return (
            <>Carregando</>
        )
    }

    return (<SubscriptionsContainer>
        <p>Escolha seu plano</p>
        {plans.map((p) =>
            <Link to={`/subscription/${p.id}`}>
                <Plan
                    key={p.id}
                    image={p.image}
                    price={p.price}
                />
            </Link>
        )
        }
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