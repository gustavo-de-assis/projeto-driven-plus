import styled from "styled-components"
import Plan from "./Plan"

export default function Subscriptions(){
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