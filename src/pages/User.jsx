import styled from "styled-components";
import BeerItem from "../components/BeerItem";
import { Link } from "react-router-dom";
import GlobalStyle from "../shared/GlobalStyle";

const User = () => {
  // 임시 맥주 데이터 사용
  const beerData = [
    {id: 1, image: require('../assets/FirstJuiceLarger.png'), name: '첫즙라거', like: 5, tags: ['달달함', '부드러움']},
    {id: 2, image: require('../assets/LemonRamalade.png'), name: '레몬라말레이드', like: 22, tags: ['달달함', '부드러움']},
    {id: 3, image: require('../assets/LargerOnTheBeach.png'), name: '라거 온 더 비치', like: 5, tags: ['달달함', '부드러움']},
    {id: 4, image: require('../assets/DarkLarger.png'), name: '다크 라거', like: 22, tags: ['달달함', '부드러움', '쓴맛']},
  ]; 
  
  const isSpecialPage = true;
  
  return (
    <Wrapper>
      <GlobalStyle specialPage={isSpecialPage} />
      <Container>
        <Title>마이페이지</Title>
        <TopSection>
          <UserContent>
            <Name>GDSC</Name>님 안녕하세요.
          </UserContent>
        </TopSection>
        <Title>좋아요 목록</Title>
        <LikeList>
          {beerData.map((beer, index) => (
            <StyledLink to={`/beer/${beer.id}`}>
              <BeerItem key={index} item={beer} />
            </StyledLink>
          ))}
        </LikeList>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 993px;
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
  margin: 10px 0 30px;
`;

const TopSection = styled.div`
  display: flex;
  max-width: 100%;
  height: 260px;
  background-color: #FFFFFF;
  padding: 33px;
  align-items: center;
  margin-bottom: 60px;
`;

const UserContent = styled.div`
  font-size: 40px;
  align-items: baseline;
`;

const LikeList = styled.div`
  max-width: 100%;
  justify-content:space-between;
  display: flex;
`;

const Name = styled.span`
  font-size: 64px;
  font-weight: 400;
  color: #7A7A7A;
  margin-right: 30px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

export default User;