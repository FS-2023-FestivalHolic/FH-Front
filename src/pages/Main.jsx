import { useState } from "react";
import styled from "styled-components";
import Navigation from "../shared/Navigation";
import MainImg from "../assets/mainImg.png";
import BeerItem from "../components/BeerItem";
import { Link } from "react-router-dom";

const Main = () => {
  // 임시 맥주 데이터 사용
  const beerData = [
    {id: 1, image: require('../assets/FirstJuiceLarger.png'), name: '첫즙라거', like: 5, tags: ['달달함', '부드러움']},
    {id: 2, image: require('../assets/LemonRamalade.png'), name: '레몬라말레이드', like: 22, tags: ['달달함', '부드러움']},
    {id: 3, image: require('../assets/LargerOnTheBeach.png'), name: '라거 온 더 비치', like: 5, tags: ['달달함', '부드러움']},
    {id: 4, image: require('../assets/DarkLarger.png'), name: '다크 라거', like: 22, tags: ['달달함', '부드러움', '쓴맛']},
  ]; 
  const [data, setData] = useState(beerData);
  return(
    <Wrapper>
      <Navigation />
      <MainBanner>
        <img src={MainImg} alt="From Grain to Galss"/>
      </MainBanner>
      <List>
        {/*아이템 렌더링 */}
        {data.map((beer, index) => (
          <Link to={`/beer/${beer.id}`}>
            <BeerItem key={index} item={beer} />
          </Link>
        ))}
      </List>
    </Wrapper>  
  );
};
  
const Wrapper = styled.div`
  max-width: 1075px;
  margin: 0 auto;
`;

const MainBanner = styled.div`
  margin: 24px 0;
`;

const List = styled.div`
  max-width: 100%;
  justify-content:space-between;
  display: flex;
`
export default Main;