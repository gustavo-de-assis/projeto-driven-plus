import styled from "styled-components";

const FormStyle = styled.form`
display: flex;
flex-direction: column;

justify-content: center;
align-items: center;


input, button{
    width: 299px;
    height: 52px;
    border-radius: 8px;
    border: none;
    margin: 8px auto;

}

input{
    padding-left: 10px;
}

button{
    color: #fff;
    font-weight: 700;
    font-size: 14px;
    background-color: #FF4791;
    :hover{
        cursor: pointer;
        opacity: 0.8;
    }
}
div{
    width: 100%
    display:flex;
    flex-wrap: wrap;
    input{
        width: 140px;
        margin: 4px;
    }
}
`
export default FormStyle;