import styled from "styled-components"
import usuario from "../../assets/img/usuario.png"


export default function MainPage() {
    
    return (<MainPageLayout>
        <MainPageHeader>
            <img src={usuario} alt=""/>
            <p>Olá, Fulano</p>
        </MainPageHeader>
        <UserPerks>
            <button>Solicitar Brindes</button>
            <button>Materiais Bonus de Web</button>
        </UserPerks>
        <PlanEdit>
            <button>Mudar Plano</button>
            <button style={{backgroundColor: '#FF4747'}}>Cancelar Plano</button>
        </PlanEdit>

    </MainPageLayout>)

}

const MainPageLayout = styled.div`
    display: flex;
    flex-direction: column;
    color: #fff;

    button{
    width: 299px;
    height: 52px;
    border-radius: 8px;
    border: none;
    margin: 8px auto;

    color: #fff;
    font-weight: 700;
    font-size: 14px;
    background-color: #FF4791;
        :hover{
            cursor: pointer;
            opacity: 0.8;
        }
    }

`
const MainPageHeader = styled.div`
    display: flex;
`
const UserPerks = styled.div`
    display: flex;
    flex-direction: column;
    
`
const PlanEdit = styled.div`
    display: flex;
    flex-direction: column;

    position: fixed;
    bottom: 15px;
    left: 36px;
    button{
        background-color: ${props=> props.cor === ''? '': props.cor};
    }
`