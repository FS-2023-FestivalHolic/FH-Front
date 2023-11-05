import styled from "styled-components";

export const DetailLayout = styled.div`
  max-width: 1075px;
  margin: 0 auto;
`;
export const ItemContainer = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 920px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

`
export const ItemImage = styled.img`
  max-width: 100%;
  height: 470px;
  border-radius: 5px 5px 0 0;
  objext-fit: cover;

  @media (max-width: 420px) {
    width: 100%;
    border-radius: 3.5px 3.5px 0 0;
  }
`;

export const InfoContainer = styled.div`
  width: 90%;
  max-height: 500px;
  display: flex;
  flex-direction: column;
  margin-left: 1.5rem;

  @media (max-width: 420px) {
    margin: 0.5rem;
  }

  .name{
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 2rem;
    font-style: normal;
    font-weight: 600;
    @media (max-width: 420px) {
      font-size: 1.5rem;
    }

  }
  .detailinfo{
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 1.3rem;
    font-style: normal;
    font-weight: 500;
    color: #666;
    margin-top: 1rem;
  }

  .location_text{
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 1.3rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-top: 1rem;

  }
   
`
export const LikeTagContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0.3rem;
  justify-content: space-between;

  @media (max-width: 420px) {
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
  }
`

export const Icon = styled.img`
    width: 1.5rem;
    height: 1.5rem
` 
export const Text = styled.span`
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    margin-left: 0.5rem;
`
export const HashTags = styled.div`
  display: flex;
  align-item: center;
  font-size: 15px;
  color: #666666;

  @media (max-width: 420px) {
    margin-top: 0.5rem;
  }
`;

export const HashTag = styled.span`
  font-family: 'Noto Sans KR', sans-serif;
  margin-right: 5px;
`;

export const Line = styled.hr`
  width: 100%;
  height: 0px;
  @media (max-width: 420px) {
    background: #ECECEC;
    height: 10px;
  }
`

export const ContentWrapper = styled.div`

  .title{
    color: #000;
    font-family: Noto Sans KR;
    font-size: 40px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 0.5rem;
    margin-top: 2.5rem;
    @media (max-width: 420px) {
      font-size:20px;
    }
  }

  .description{
    color: #666;
    font-family: Noto Sans KR;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 0.5rem;

    @media (max-width: 420px) {
      font-size:14px;
    }
  }
`

export const PriceContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 1rem;
  justify-content: space-between;


  .price_text{
    color: #000;
    font-family: Noto Sans KR;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    @media (max-width: 420px) {
      display: none;
    }
  }
  .price_value{
    color: #000;
    font-family: Noto Sans KR;
    font-size: 32px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    
  }

  .order{
    width: 15rem;
    height: 3rem;
    border-radius: 3px;
    background: #FFC960;
    color: #FFF;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family:  Noto Sans KR;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    border: 3px solid #FFC960;
    @media (max-width: 420px) {
      display: none;
    }
  }
`
export const MobileToolBar = styled.div`
display: none;
@media (max-width: 420px) {
  width: 100%;
  height: 65px;
  display: flex;
  flex-direcion: row;
  align-items: center;
  z-index: 2;
  bottom: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.20);
  border-bottom: 1px solid rgba(0, 0, 0, 0.20);
  background: #FFF;
  position: fixed;
  
}
`

export const LikeIconContainer = styled.div`
    width: 51px;
    height: 44px;
    border-radius: 2px;
    border: 1px solid rgba(0, 0, 0, 0.20);
    margin: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;

`

export const CartButton = styled.button`
    width: 38%;
    height: 45px;
    border-radius: 2px;
    border: 1.5px solid #FFC960;
    color: #121212;
    font-family: Noto Sans KR;
    font-size: 17px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0.3rem;
`