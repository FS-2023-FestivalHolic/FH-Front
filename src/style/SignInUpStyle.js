import styled from "styled-components";


export const SignLayout = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    .bottomtext{
        font-family: 'Noto Sans KR', sans-serif;
        font-size: 0.9rem;
        font-style: normal;
        font-weight: 500;
        color: #000;
    }
    a{
        color: #0090F0;
    }
`
export const SignHeader = styled.div`
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: 400px) {
        margin-top: 4rem;
    }
    .welcometext{
        font-family: 'Noto Sans KR', sans-serif;
        font-size: 1.8rem;
        font-style: normal;
        font-weight: 600;
        color: #000;
        margin: 0.5rem;
        @media (max-width: 400px) {
            font-size: 1.5rem;
        }
    }
    .subtext{
        font-family: 'Noto Sans KR', sans-serif;
        font-size: 0.9rem;
        font-style: normal;
        font-weight: 600;
        @media (max-width: 400px) {
            font-size: 0.7rem;
        }
    }
  

`
export const SignForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1rem;
    .error{
        width: 26rem;
        font-family: 'Noto Sans KR', sans-serif;
        font-size: 0.9rem;
        font-style: normal;
        font-weight: 500;
        color: #9B111E;
        @media (max-width: 400px) {
            width: 90%;
        }
    }

    @media (max-width: 400px) {
        width: 90%;
    }

    
`
export const SignLabel = styled.label`
    margin-top: 0.5rem;
    width: 26rem;
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 0.9rem;
    font-style: normal;
    font-weight: 600;
    @media (max-width: 400px) {
        width: 90%;
    }
`
export const SignInput = styled.input`
    width: 26rem;
    height: 2.5rem;
    border-radius: 7px;
    border: 1px solid #666;
    margin: 0.4rem 0;

    @media (max-width: 400px) {
        width: 90%;
    }
`

export const SignButton = styled.button`
    width: 26rem;
    height: 2.5rem;
    border-radius: 7px;
    background: #8393A7;
    color: #FFF;
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 0.9rem;
    border: none;
    margin-top: 0.5rem;

    @media (max-width: 400px) {
        width: 90%;
    }
`