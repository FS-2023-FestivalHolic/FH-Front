import React, {useEffect, useState} from 'react'
import styled from 'styled-components';
import {FiSearch} from 'react-icons/fi';
import {AiOutlineUser} from 'react-icons/ai';
import logoutImg from '../assets/logout.png';
import instaImg from '../assets/instagram.png';
import {Link, useLocation} from 'react-router-dom';
import{RxHamburgerMenu} from 'react-icons/rx';
import MobileMenu from '../components/MobileMenu';
import axios from 'axios'; 
import { removeCookie } from '../cookies';
import { useNavigate } from 'react-router-dom';
import { getCookie } from '../cookies';
const api = axios.create({
  baseURL: 'http://3.34.177.220:8083', 
  headers: { "Content-type": "application/json" }, // data type
});

function Header(props) {
  //로그인 상태 변수 
  const {isLogin, onLogout} = props;
  
  const [mobileVisible, setMobileVisible] = useState(false);

  const [userId, setUserId] = useState();


  const navigate = useNavigate();


  //로그아웃 핸들러
  const handleLogout = () => {
         //쿠키 삭제
        removeCookie('accessToken');
        onLogout(); //로그아웃 핸들러 호출 
        navigate('/')
    
  }


  //모바일 메뉴 렌더링 
  const handleMobileMenu =() =>{
    setMobileVisible(!mobileVisible);
  }



  const handleMyPage = async () =>{
    if(!isLogin){
      alert('로그인 후 마이페이지 접속 가능합니다.')
      navigate('/login')
    }else{

      try{
        const response = await api.get('/api/users',{
          headers:{'Accesstoken': getCookie('accessToken')},
          withCredentials: true
        });

        console.log(response);
        if(response.data.status=="SUCCESS"){
          console.log(response.data.message);
          setUserId(response.data.data.userId);
                  
          navigate(`/${response.data.data.userId}`, {state:{userData: response.data.data}}); //마이페이지 이동시 state에 유저 데이터 담아서 보냄 
        }
    
      }catch (error) {
        console.log('API 호출 중 에러 발생:', error.response);
      }
           
    }
  }

  //login, register 경로일 때는 Header 안보이게 처리 
  const location = useLocation();
  const hideHeader = ['/login', '/register'].includes(location.pathname);
  if (hideHeader){
    return null;
  }
  return (
    <div>
    <WebLayout>
        <Link to='/'>
          <Logo src='/FH_logo.png' width={80} ></Logo>
        </Link>
        <RightLayout>
        <a href='https://www.instagram.com/nowon_beer_festival/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA=='>
          <img src={instaImg} className='icon' width={28}/>
        </a>
        <FiSearch className='icon' size={27}/>
        {/* <Link style={{textDecoration: 'none'}} onClick={} to={isLogin? `/${userId}`:'/login'} state={{userData: userData}}>  */}
          <AiOutlineUser style={{pointer: 'cursor'}}onClick={handleMyPage} className='icon' size={30}/>
        {/* </Link> */}

        {isLogin && ( // isLoggedIn이 true일 때만 로그아웃 버튼을 렌더링
          <img onClick={handleLogout} src={logoutImg} className='icon' width={25} style={{ display: isLogin ? 'inline-block' : 'none' }} // 로그인 상태일 때만 표시
          />
        )}
       </RightLayout>
    </WebLayout>

    <MobileLayout>
      <Link to='/'>
        <Logo src='/FH_logo.png' width={80} ></Logo>
      </Link>
      <RxHamburgerMenu className='menuIcon' size={27} onClick={handleMobileMenu}></RxHamburgerMenu>
      {mobileVisible && <MobileMenu mobileVisible={setMobileVisible} isLogin={isLogin} userId={userId} handleLogout={handleLogout}/>}
     </MobileLayout>
    </div>
  )
}

export default Header

const WebLayout = styled.div`
  width: 100%;
  height: 4rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.21);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: #FFF;

  @media screen and (max-width: 420px) { // 화면의 너비가 768픽셀 이하일 때
    display: none; // RightLayout 숨기기
  }
  

`

const MobileLayout = styled.div`
  display: none;
  
  .menuIcon{
    margin-right: 0.5rem;

  }

  @media screen and (max-width: 420px) { // 화면의 너비가 420픽셀 이하일 때
    width: 100%;
    height: 4rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.21);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background: #FFF;

  }
`

const Logo = styled.img`
  margin-left: 2rem;

  @media screen and (max-width: 420px) { // 화면의 너비가 420픽셀 이하일 때
    margin-left: 1rem;
  }
`

const RightLayout = styled.div`
  width: 15rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  margin-right: 1.5rem;

  .icon{
    margin: 0 0.7rem;
    color: #000;
  }

 
`