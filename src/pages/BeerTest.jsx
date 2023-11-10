import React, { useState } from 'react';
import BannerTest from "../assets/Banner_beerTest.png";
import styled from 'styled-components';
import Navigation from '../shared/Navigation';
import WheatBeer from '../assets/wheatBeer.png';
import Kakao from '../assets/kakaoTalk.png';
import Insta from '../assets/instagram.png';
import Chain from '../assets/chain.png';

function BeerType(answers) {
  const answerKey = `question1${answers.question1}question2${answers.question2}question3${answers.question3}question4${answers.question4}`;
  const results = {
    'AEIM' : '밀맥주(WHEAT BEER)',
    'AEIN' : '밀맥주'
  }
  return results[answerKey];
}

function BeerTest() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);
  const totalQuestions = 4;

  const startTest = () => {
    setStep(1); // 검사 시작 버튼을 클릭하면 질문 1로 이동
  };

  const handleAnswer = (question, answer) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [`question${step}`]: answer,
      step: step + 1,
    }));

    console.log(`질문 ${step}: 답변 - ${answer}`);

    if (step <= totalQuestions) {
      setStep(step + 1);
    } else {
      calculateResult();
    }
  };

  const calculateResult = () => {
    const result = BeerType(answers);
    setResult(result);
  };

  return(
    <div>
      <Navigation />
      {step === 0 && (
        <StartContainer>
          <MainBanner>
            <img src={BannerTest} alt="Beer Test"/>
          </MainBanner>
          <Text>수제 맥주 축제를 본격적으로 즐기기 위해 <br/>
            자신에게 맞는 맥주 유형을 찾아보세요!</Text>
          <StartBtn onClick={startTest}>검사 실시</StartBtn>
        </StartContainer>
      )}
      {step === 1 && (
        <QContainer>
          <Step>{step} / {totalQuestions}</Step>
          <Question>
            <QTitle>수제맥주를 자주 마시나요?</QTitle>
            <QButton onClick={() => handleAnswer(1, 'A')}>매일</QButton>
            <QButton onClick={() => handleAnswer(1, 'B')}>일주일에 한 번</QButton>
            <QButton onClick={() => handleAnswer(1, 'C')}>한 달에 한 번</QButton>
            <QButton onClick={() => handleAnswer(1, 'D')}>거의 마시지 않음</QButton>
          </Question>
        </QContainer>
      )}
      {step === 2 && (
        <QContainer>
          <Step>{step} / {totalQuestions}</Step>
          <Question>
            <QTitle>어떤 맛의 맥주를 선호하시나요?</QTitle>
            <QButton onClick={() => handleAnswer(2, 'E')}>달콤한 맛</QButton>
            <QButton onClick={() => handleAnswer(2, 'F')}>쌉사름한 맛</QButton>
            <QButton onClick={() => handleAnswer(2, 'G')}>쓴 맛</QButton>
            <QButton onClick={() => handleAnswer(2, 'H')}>과일 맛</QButton>
          </Question>
      </QContainer>
      )}
      {step === 3 && (
        <QContainer>
          <Step>{step} / {totalQuestions}</Step>
          <Question>
            <QTitle>어떤 향의 맥주를 선호하시나요?</QTitle>
            <QButton onClick={() => handleAnswer(3, 'I')}>과일 향</QButton>
            <QButton onClick={() => handleAnswer(3, 'J')}>향신료 향</QButton>
            <QButton onClick={() => handleAnswer(3, 'K')}>맥아 향</QButton>
            <QButton onClick={() => handleAnswer(3, 'L')}>홉 향</QButton>
          </Question>
      </QContainer>
      )}
      {step === 4 && (
        <QContainer>
          <Step>{step} / {totalQuestions}</Step>
          <Question>
            <QTitle>수제맥주에서 중요하다고 생각하는 요소가 무엇인가요?</QTitle>
            <QButton onClick={() => handleAnswer(4, 'M')}>맛</QButton>
            <QButton onClick={() => handleAnswer(4, 'N')}>향</QButton>
            <QButton onClick={() => handleAnswer(4, 'O')}>색깔</QButton>
            <QButton onClick={() => handleAnswer(4, 'P')}>알코올 도수</QButton>
          </Question>
      </QContainer>
      )}
      {step === 5 && (
        <ResultContainer>
          <RTitle>수제 맥주 테스트 결과</RTitle>
          <RText>이런 맥주는 어떠세요?</RText>
          <BeerTitle>밀맥주(WHEAT BEER)</BeerTitle>
          <img src={WheatBeer} alt="밀맥주"/>
          <ShareTxt>퀴즈 결과를 주변 사람에게 공유해보세요!</ShareTxt>
          <Share>
            <img src={Kakao} alt="kakao Talk"/>
            <img src={Insta} alt="Instagram" />
            <img src={Chain} alt="url share" />
          </Share>
          <Hr />
          <Description>
            <DTitle>밀맥주(WHEAT BEER)</DTitle>
            <DContent>
              달콤한 맛 / 열대과일 향<br />
              ALC : 4.5%
            </DContent>
            <DContent>
              밀맥주는 간단하게 '밀로 만든 맥주'라는 뜻으로,
              국내 크래프트 맥주 스타일 중 가장 많이 판매되는 스타일이며
              특유의 부드러움과 자극적이지 않은 맛으로 수제 맥주 입문자나 여성분들이 많이 좋아하는 스타일입니다.
            </DContent>
          </Description>
        </ResultContainer>
      )}
    </div>
  );
};

const StartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 105px;
  margin: 0 auto;
`;

const MainBanner = styled.div`
  margin: 24px 0;
`;

const Text = styled.div`
  font-size: 36px;
  color: #666666;
`;
const StartBtn = styled.button`
  width: 293px;
  height: 81px;
  background-color: #FFC960;
  border: none;
  border-radius: 40px;
  color: #FFFFFF;
  font-size: 40px;
  position: absolute;
  margin-top: 350px;
  cursor: pointer;
`;

const QContainer = styled.div`
  max-width: 1130px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  margin-top: 50px;
`;

const Step = styled.div`
  font-size: 32px;
`

const Question = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  margin-top: 15px;
`;

const QTitle = styled.div`
  font-size: 48px;
  margin-bottom: 50px;
`;

const QButton = styled.button`
  width: 1130px;
  height: 96px;
  background-color: #FFC960;
  border: none;
  border-radius: 10px;
  color: #FFFFFF;
  font-size: 36px;
`;

const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
`;

const BeerTitle = styled.div`
  font-size: 64px;
  margin-bottom: 40px;
`;

const ShareTxt = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin: 40px 0;
`;

const Share = styled.div`
  display: flex;
  gap: 150px;
`

const Hr = styled.hr`
  width: 1136px;
  margin: 40px 0;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

const DTitle = styled.div`
  font-size: 28px;
  color: #383838;
`;

const DContent = styled.div`
  width: 1136px;
  color: #666666;
  font-size: 28px;
`;

const RTitle = styled.div`
  width: 1136px;
  color: #7A7A7A;
  font-size: 32px;
`;

const RText =  styled.div`
  width: 1136px;
  color: #383838;
  font-size: 24px;
  margin: 10px 0 40px;
`;

export default BeerTest;

