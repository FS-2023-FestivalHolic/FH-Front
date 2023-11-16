import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import Navigation from "../shared/Navigation";
import MainImg from "../assets/mainImg.png";
import BeerSlide from "../components/BeerSlide";
import MobileBanner from "../assets/Banner_main_mobile.png";
import BeerSlideMobile from '../components/BeerSlidMobile';

const Main = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 390);

  // 모바일용일 때 이미지 전환
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 390);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // 임시 맥주 데이터 사용
  const beerData = [
    {id: 1, image: require('../assets/FirstJuiceLarger.png'), name: '첫즙라거', like: 5, tags: ['달달함', '부드러움']},
    {id: 2, image: require('../assets/LemonRamalade.png'), name: '레몬라말레이드', like: 22, tags: ['달달함', '부드러움']},
    {id: 3, image: require('../assets/LargerOnTheBeach.png'), name: '라거 온 더 비치', like: 5, tags: ['달달함', '부드러움']},
    {id: 4, image: require('../assets/DarkLarger.png'), name: '다크 라거', like: 22, tags: ['달달함', '부드러움', '쓴맛']},
    {id: 3, image: require('../assets/LargerOnTheBeach.png'), name: '라거 온 더 비치', like: 5, tags: ['달달함', '부드러움']},
    {id: 4, image: require('../assets/DarkLarger.png'), name: '다크 라거', like: 22, tags: ['달달함', '부드러움', '쓴맛']},
    {id: 3, image: require('../assets/LargerOnTheBeach.png'), name: '라거 온 더 비치', like: 5, tags: ['달달함', '부드러움']},
    {id: 4, image: require('../assets/DarkLarger.png'), name: '다크 라거', like: 22, tags: ['달달함', '부드러움', '쓴맛']},
  ]; 

  return(
    <Wrapper>
      <Navigation />
      <MainBanner>
        {isMobile ? <img src={MobileBanner} alt="From Gain to Glass" /> : <img src={MainImg} alt="From Grain to Glass"/> }
      </MainBanner>
      <Container>
        <Title>수제 맥주 종류</Title>
        <Text>다양한 수제 맥주를 소개합니다.</Text>
      </Container>
      {isMobile ? <BeerSlideMobile items={beerData} /> : <BeerSlide items={beerData} /> }      
    </Wrapper>  
  );
};
  
const Wrapper = styled.div`
  max-width: 1075px;
  margin: 0 auto;

  @media (max-width: 390px) {
    max-width: 367px;
  }
`;

const MainBanner = styled.div`
  margin: 24px 0;

  @media (max-width: 390px) {
    margin: 0 0 24px;
  }
`;

const Container = styled.div`
  display: none;
  color: #212121;

  @media (max-width: 390px) {
    display: block; 
    margin-bottom: 15px;
  }
`;

const Title = styled.div`
  display: none;

  @media (max-width: 390px) {
    display: flex;
    font-size: 20px;
    font-weight: 700;
  }
`;

const Text = styled.div`
  display: none;

  @media (max-width: 390px) {
    display: flex;
    font-size: 14px;
    font-weight: 400;
  }
`;

export default Main;