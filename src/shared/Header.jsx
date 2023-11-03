import React, {useState} from 'react'
import styled from 'styled-components';
import {FiSearch} from 'react-icons/fi';
import {AiOutlineUser} from 'react-icons/ai';
import logoutImg from '../assets/logout.png';
import instaImg from '../assets/instagram.png';
import {Link} from 'react-router-dom';
import{RxHamburgerMenu} from 'react-icons/rx';
import MobileMenu from '../components/MobileMenu';

function Header() {
  //로그인 상태 변수 
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [mobileVisible, setMobileVisible] = useState(false);
  //userId 가져오기 
  const userId = 1;

  //로그아웃 핸들러
  const handleLogout = () => {

  }

  //모바일 메뉴 렌더링 
  const handleMobileMenu =() =>{
    setMobileVisible(!mobileVisible);
  }

  if(window.location.pathname === '/login'||window.location.pathname === '/register') return null
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
        <Link style={{textDecoration: 'none'}}to={`/${userId}`}>
          <AiOutlineUser className='icon' size={30}/>
        </Link>
        {isLoggedIn && ( // isLoggedIn이 true일 때만 로그아웃 버튼을 렌더링
          <img onClick={handleLogout} src={logoutImg} className='icon' width={25}/>
        )}
       </RightLayout>
    </WebLayout>

    <MobileLayout>
      <Link to='/'>
        <Logo src='/FH_logo.png' width={80} ></Logo>
      </Link>
      <RxHamburgerMenu className='menuIcon' size={27} onClick={handleMobileMenu}></RxHamburgerMenu>
      {mobileVisible && <MobileMenu mobileVisible={setMobileVisible} loggedin={isLoggedIn} userId={userId}/>}
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