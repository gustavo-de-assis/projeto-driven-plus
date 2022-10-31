import styled from "styled-components"

export default function Plan({image, price}){
    return(
        <PlanContainer>
            <svg xmlns={image} viewBox="0 0 24 24" stroke="currentColor">
            </svg>
            <p>R${price}</p>
        </PlanContainer>
    )
}


const PlanContainer = styled.div`
    width: 290px;
    height: 180px;

    display: flex;
    justify-content: space-around;
    align-items: center;

    border-radius: 10px;
    border: 3px solid #7E7E7E;
    padding: 0 16px;

    margin-bottom: 10px;

    p{
        font-size: 24px;
    }
`