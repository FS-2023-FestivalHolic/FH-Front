import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import Navigation from "../shared/Navigation";
import MainImg from "../assets/mainImg.png";
import BeerSlide from "../components/BeerSlide";
import MobileBanner from "../assets/Banner_main_mobile.png";
import BeerSlideMobile from '../components/BeerSlidMobile';
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://3.34.177.220:8083', 
});

const Main = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 390);
  const [beerData, setBeerData] = useState([]);


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

  useEffect(()=>{
    async function fetchBeerData() {
      try {
        const response = await api.get(`/api/beers`);
        if (response) {
          setBeerData(response.data.data);
        }
      } catch (error) {
        console.error('API 호출 중 에러 발생:', error);
      }
    }
    fetchBeerData();
  }, []);

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