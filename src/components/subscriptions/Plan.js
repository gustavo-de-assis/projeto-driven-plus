import styled from "styled-components"

export default function Plan({image, price}){
    return(
        <PlanContainer>
            <img src={image} alt="" />

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