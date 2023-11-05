import React from 'react'
import styled from 'styled-components'
import {IoCloseOutline} from 'react-icons/io5'
import { NavLink} from 'react-router-dom'

function MobileMenu(props) {
    const {mobileVisible} = props;
    const {isLogin} = props;
    const {userId} = props;

    const closeMenu = () =>{
        mobileVisible(false);

    }

    
    return (
        <Layout>
            <MenuContainer>
                <Header>
                    <img style={{margin: ' 1rem 0.5rem 1rem 0.5rem '}}src='/FH_logo.png' width={80} ></img>
                    <IoCloseOutline onClick={closeMenu}className='icon' size={30}/>
                </Header>
                <StyledLink onClick={closeMenu} to='/'>Main</StyledLink>
                <StyledLink onClick={closeMenu} to='/beer'>수제맥주</StyledLink>
                {isLogin && <StyledLink onClick={closeMenu} to={`/${userId}`}>마이페이지</StyledLink>}
                <hr className='line'/>
        
                {isLogin ? (
                    <ButtonContainer>
                        <NavLink className='button_link' style={{background:'#FFF', color: '#000'}} onClick={props.handleLogout}>로그아웃</NavLink>
                    </ButtonContainer>

                )
                :(
                    <ButtonContainer>
                    <NavLink className='button_link' style={{background:'#FFF', color: '#000'}} onClick={closeMenu} to='/login'>로그인</NavLink>
                    <NavLink className='button_link' style={{background: '#B3B3B3', color: '#FFF'}}onClick={closeMenu} to='/register'>회원가입</NavLink>
                    </ButtonContainer>
                )}
                   
             
            </MenuContainer>
        </Layout>
    )
    }

export default MobileMenu

const Layout = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    background: #B3B3B3;
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    top: 0px;

`
const MenuContainer = styled.div`
    position: absolute;
    width: 95%;
    height: 70vh;
    border-radius: 5px;
    background: #FFF;
    margin: 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    .line{
        width: 99.5%;
        height: 0px;
    }
`

const Header = styled.div`
    width: 95%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    .icon{
        background: #e9ecef;
        color: #7A7A7A;
    }
`

const StyledLink = styled(NavLink)`
    width: 90%;
    text-decoration: none;
    font-size: 20px;
    font-weight: 400;
    color: #000;
    font-family: 'Noto Sans KR', sans-serif;
    margin: 0.2rem;
`

const ButtonContainer = styled.div`
    width: 95%;
    display: flex;
    flex-direction: row;
    align-items: center;

    .button_link{
        width: 97px;
        height: 32px;
        border-radius: 10px;
        border: 1px solid #D9D9D9;
        font-family: Noto Sans KR;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        margin: 0.3rem;
        text-decoration-line: none;
        display: flex;
        justify-content: center;
        align-items: center;
    }

`