import React,{useState, useEffect} from 'react'
import Navigation from '../shared/Navigation'
import {useParams} from 'react-router-dom'
import { Wrapper} from "@googlemaps/react-wrapper";
import RenderMap from '../components/RenderMap';
import LikeFilled from "../assets/heart.png";
import LikeOutlined from "../assets/nolike.png";
import Cart from '../assets/cart.png'
import * as d from '../style/DetailPageStyle';
import axios from 'axios';

import {google_api_key}from '../PersonalData'
import { useNavigate } from 'react-router-dom';
import { getCookie } from '../cookies';
const api = axios.create({
  baseURL: 'http://3.34.177.220:8083', 
});


function Detail(props) {
  const {isLogin} = props;
  const beerId = useParams().detailid; //App.js 라우트 파라미터에 있는 detailid를 가져옴 

  const [beerdata, setBeerData] = useState([]);
  const [contents, setContents] = useState([]);
  const [Likes, setLikes] = useState(0) //좋아요 수를 담기 위한 변수 
  const [LikeAction, setLikeAction] = useState(null) //이미 좋아요를 눌렀을 시 상태를 표시하기 위한 변수 

 const navigate = useNavigate();

  useEffect(()=>{
    async function fetchBeerData() {
      try {
        const response = await api.get(`/api/beers/${beerId}`);
        if (response) {
          console.log(response.data.message);
          console.log(getCookie('sessionId'));
          setBeerData(response.data.data);
          setContents(response.data.data.beerContentList);
   
        }
      } catch (error) {
        console.error('API 호출 중 에러 발생:', error);
      }
    
    }

   
    fetchBeerData();

  }, []);

  // useEffect(()=>{
  //   async function setMyLike(){
  //     console.log(cookies.sessionId);
  //     try {

  //       const response = await api.get(`/api/likes/beers/${beerId}`,{
  //         headers: {sessionId: cookies.sessionId}
  //       });
  //       if (response.data.message=="이미 좋아요 상태입니다.") {
  //         setLikeAction('liked');
  //       }
  //     } catch (error) {
  //       console.error('API 호출 중 에러 발생:', error);
  //     }

  //   }
  //   setMyLike();
  // },[]);

  if (beerdata.length === 0) {
    return <div>Loading...</div>; // 데이터 로딩 중일 때 로딩 스피너 등을 표시
  }

  //좋아요 기능 처리 
  const onLike = async () => {
    console.log('좋아요')
    if(!isLogin){ //로그인 되어 있지 않은 경우 
      alert('로그인 먼저 해주세요.');
      navigate('/login');
      
    }else{
    if(LikeAction === null){
        //Like 버튼이 클릭이 안되어 있을 때 버튼을 누르면 좋아요 수 1 증가 
        try{
        const response = await api.get(`/api/likes/beers/${beerId}`,{
          headers:{'sessionId': getCookie('sessionId')},
          withCredentials: true
        });
        console.log(response);
        // if(response.data.status=="SUCCESS"){
        //   setLikes(Likes+1);
        //   setLikeAction('liked')
        // }
       
      }catch (error) {
        console.log('API 호출 중 에러 발생:', error.response);
      }
              
    }else{
        //Like 버튼이 클릭이 되어 있을 때 버튼을 누르면 이미 좋아요를 눌렀다고 표시 
        alert("이미 좋아요를 눌렀어요!")
    }
  }
}
  return (
    <d.DetailLayout>
      <Navigation/>
      <d.ItemContainer>
        <d.ItemImage src={beerdata.imageUrl} alt={'beer image'}/>
        <d.InfoContainer>
            <span className='name'>{beerdata.beerName}</span>
            <span className='detailinfo'>{beerdata.introduction}</span>
            {/*구글맵 부분*/}
            <span className='location_text'>위치</span>
            <Wrapper apiKey={google_api_key}>
              <RenderMap/>
            </Wrapper>

            {/*좋아요, 해시태그 부분*/}
            <d.LikeTagContainer>  
              <div style={{display: 'flex', alignItems: 'center'}}>
              {LikeAction === 'liked' ? 
                <d.Icon src={LikeFilled} onClick={onLike} alt="좋아요" /> : 
                <d.Icon src={LikeOutlined} onClick={onLike} alt="좋아요" />}
                <d.Text>좋아요 {Likes}개</d.Text>
              </div>
            
              <d.HashTags>
                {beerdata.hashTagNames.map((tag, index) =>(
                  <d.HashTag key={index}>{"#"}{tag}</d.HashTag>
                ))}
              </d.HashTags>
            </d.LikeTagContainer>

            {/*가격 부분*/}
            <d.PriceContainer>
                  <span className='price_text'>상품 금액</span>
                  <span className='price_value'>6000원</span>
                  <button className='order'>주문하기</button>
            </d.PriceContainer>

          </d.InfoContainer>
      </d.ItemContainer>
      <br/><br/>
      <d.Line/>

      {/*상품상세설명 부분*/}
      <d.ContentWrapper>
      {contents  && contents.map((content, index)=>(
        <div key={index}>
        <p className='title'>{content.subject}</p>
        <p className='description'>{content.description}</p>
 
        </div>
      ))}
      </d.ContentWrapper>

      {/*모바일 화면에서 하단바 부분*/ }
      <d.MobileToolBar>
        <d.LikeIconContainer>
        {LikeAction === 'liked' ? 
            <d.Icon src={LikeFilled} onClick={onLike} alt="좋아요" /> : 
            <d.Icon src={LikeOutlined} onClick={onLike} alt="좋아요" />}
        </d.LikeIconContainer>
        <d.CartButton style={{background:'#FFF'}}>
          <img src={Cart} style={{width: '25px'}}/>
          <span style={{marginLeft: '0.5rem'}}>카트담기</span>
        </d.CartButton>
        <d.CartButton style={{background: '#FFC960'}}>
          <span style={{marginLeft: '0.5rem'}}>주문하기</span>
        </d.CartButton>
      </d.MobileToolBar>
    </d.DetailLayout>
  )
  // }
}

export default Detail;

