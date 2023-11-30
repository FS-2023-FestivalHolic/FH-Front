import React from 'react';
import styled from "styled-components";
import BeerItem from "../components/UserBeerItem";
import { Link, useLocation } from "react-router-dom";
import GlobalStyle from "../shared/GlobalStyle";

const User = () => {
  const { state } = useLocation();
  const isSpecialPage = true;

  return (
    <Wrapper>
      <GlobalStyle specialPage={isSpecialPage} />
      <RContainer>
        <Title>마이페이지</Title>
        <TopSection>
          <UserContent>
            <Name>{state.userData.userName}</Name>님 안녕하세요.
          </UserContent>
        </TopSection>
        <Title>좋아요 목록</Title>
        <LikeList>
          {state.userData.beerList.map((beer, index) => (
            <Link Link to={`/beer/${beer.beerId}`} key={index} style={{ textDecoration: "none"}}>
              <BeerItem item={beer}  key={index}/>
            </Link>
          ))}    
        </LikeList>
      </RContainer>
    </Wrapper>
  );
};

// 공통된 스타일
const Wrapper = styled.div`
  margin: 0;
  color: #666666;
`;

const Container = styled.div`
  max-width: 1081px;
  margin: 0 auto;
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: 400;
  padding: 5px 0;
  margin: 10px 0;

  @media (max-width: 391px) {
    width: 370px;
    font-size: 20px;
    padding: 2px 0;
    margin: 12px auto;
  }
`;

const TopSection = styled.div`
  display: flex;
  max-width: 100%;
  height: 194px;
  background-color: #FFFFFF;
  padding: 33px;
  align-items: center;
  margin: 30px 0;

  @media (max-width: 391px) {
    height: 84px;
    padding: 16px;
    margin: 32px 0;
  }
`;

const UserContent = styled.div`
  font-size: 40px;
  align-items: baseline;

  @media (max-width: 391px) {
    font-size: 15px;
  }
`;

const LikeList = styled.div`
  max-width: 100%;
  justify-content:space-between;
  display: grid;
  grid-template-columns: repeat(4,1fr);
  grid-gap: 11px;
  margin: 20px 0;

  @media (max-width: 391px) {
    width: 370px;
    display: grid;
    grid-template-columns: repeat(2,1fr);
    grid-gap: 8px;
    margin: 14px auto;
    object-fit: cover;
  }
`;

const Name = styled.span`
  font-size: 64px;
  font-weight: 400;
  color: #7A7A7A;
  margin-right: 30px;

  @media (max-width: 391px) {
    font-size: 24px;
    margin-right: 12px;
  }
`;

const RContainer = styled(Container)`
  @media (max-width: 391px) {
    width: 100%;
  }

  @media (min-width: 390px) and (max-width: 1080px) {
    width: 100%;
  }
`;


export default User;