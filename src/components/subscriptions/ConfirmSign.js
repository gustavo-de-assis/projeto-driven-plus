import styled from "styled-components"

export default function ConfirmSign({plano, valor, setConfirmSub}){


    return(<>
        <ConfirmContainer>
        </ConfirmContainer>
        <InfoContainer>
            <p>Tem certeza que deseja assinar o plano {plano} por R$ {valor} ?</p>
            <div>
                    <button style={{backgroundColor: '#777'}} >Não</button>
                    <button style={{backgroundColor: '#FF4791'}} onClick={()=>setConfirmSub(false)} >Sim</button>
            </div>
        </InfoContainer>
    
    </>
    )
}

const ConfirmContainer = styled.div `
    width: 100%;
    height: 100%;
    background-color: #444;
    opacity: 0.6;
    position: absolute;
    
    top:0;
    left: 0;
    `
const InfoContainer= styled.div`
    width: 248px;
    height: 210px;
    p{
        font-size: 18px;
        font-weight: 700;
    
        text-align: center;
        margin: 33px 22px 47px 22px;
    }
    button{
        width: 95px;
        height: 52px;
        color: #fff;
        font-weight: 700;
        font-size: 14px;
        
        border-radius: 8px;
        border: none;
        margin: 8px auto;
        :hover{
            cursor: pointer;
            opacity: 0.8;
        }
    }
    div{
        width: 100%;
        display:flex;
        flex-flow: row wrap;
        justify-content: center;
        flex-wrap: wrap;
       
    }
    position: absolute;

    background-color: white;
    
    border-radius: 12px;
    top: 230px;
    left: 64px;
`