import React,{useState, useEffect, useRef} from 'react'
import Navigation from '../shared/Navigation'
import styled from 'styled-components'
import {useParams} from 'react-router-dom'
import { Wrapper} from "@googlemaps/react-wrapper";
import RenderMap from '../components/RenderMap';
import LikeDislikes from '../components/LikeDislikes';
import axios from 'axios';
function Detail() {
  
  const beerId = useParams().detailid; //App.js 라우트 파라미터에 있는 detailid를 가져옴 
  const beerData = [
    {id: 1, image: require('../assets/FirstJuiceLarger.png'), name: '첫즙라거', explanation: '첫번 맥즙의 깊고 풍부한 맛과 극강의 부드러움을 가진 라거!', like: 5, tags: ['달달함', '부드러움']}, 
    {id: 2, image: require('../assets/LemonRamalade.png'), name: '레몬라말레이드', explanation: '청량함과 레몬의 은은함을 느낄수 있는 라거', like: 22, tags: ['달달함', '부드러움']},
    {id: 3, image: require('../assets/LargerOnTheBeach.png'), name: '라거 온 더 비치',explanation: '청량함과 레몬의 은은함을 느낄수 있는 라거', like: 5, tags: ['달달함', '부드러움']},
    {id: 4, image: require('../assets/DarkLarger.png'), name: '다크 라거', explanation: '청량함과 레몬의 은은함을 느낄수 있는 라거', like: 22, tags: ['달달함', '부드러움', '쓴맛']},
  ]; 
  console.log(beerId);

  const [data, setData] = useState(beerData[beerId-1]);
  const [contents, setContents] = useState([]);
  useEffect(()=>{
    // setData(beerData[beerId-1]);
    // axios.get("http://localhost:4000/contents")
    // .then((res)=>{
    //   return res.data;
    // })
    // .then(data=>{
    //   setContents(data);
    //   console.log(data);
    // })
    // .catch((error)=>{
    //   console.error('API 호출 중 에러 발생:', error);
    // })
  }, []);


  return (
    <DetailLayout>
      <Navigation/>
      <ItemContainer>
        <ItemImage src={data.image} alt={'beer image'}/>
        <InfoContainer>
            <span className='name'>{data.name}</span>
            <span className='detailinfo'>{data.explanation}</span>
            <span className='location_text'>위치</span>
            <Wrapper apiKey={"AIzaSyBVukbpmEsDRTQh0e2JkFKgDIa8PrDZr_8"}>
              <RenderMap/>
            </Wrapper>
            <div style={{display: 'flex', flexDirection: 'inline', justifyContent: 'space-between'}}>  
              <LikeDislikes/>
              <HashTags>
                {data.tags.map((tag, index) =>(
                  <HashTag key={index}>{"#"}{tag}</HashTag>
                ))}
              </HashTags>
            </div>
          </InfoContainer>
      </ItemContainer>
      <br/><br/>
      <Line/>
      {/* {data.contents.map((content, index)=>(
        <div>
        <span>{content.title}</span>
        <span>{content.exp}</span>
        </div>
      ))} */}
      {/*상품상세설명 부분*/}
      <ContentWrapper>
        {/* {contents.map((data, index)=>(
         <p className={data.style.toString()}>{data.content}</p>
        ))
        } */}
      </ContentWrapper>
    </DetailLayout>
  )

}

export default Detail;

const DetailLayout = styled.div`
  max-width: 1075px;
  margin: 0 auto;
`;
const ItemContainer = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 920px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

`
const ItemImage = styled.img`
  max-width: 100%;
  height: 420px;
  border-radius: 5px 5px 0 0;
  objext-fit: cover;

  @media (max-width: 420px) {
    width: 100%;
    border-radius: 3.5px 3.5px 0 0;
  }
`;

const InfoContainer = styled.div`
  width: 90%;
  max-height: 420px;
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

  }
  .detailinfo{
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    color: #666;
    margin-top: 1rem;
  }

  .location_text{
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-top: 1rem;

  }
   
`

const HashTags = styled.div`
  display: flex;
  align-item: center;
  font-size: 11px;
  color: #666666;

  @media (max-width: 420px) {
    font-size:7.5px;
  }
`;

const HashTag = styled.span`
  margin-right: 5px;
`;

const Line = styled.hr`
  width: 100%;
  height: 0px;
  @media (max-width: 420px) {
    background: #ECECEC;
    height: 10px;
  }
`

const ContentWrapper = styled.div`

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