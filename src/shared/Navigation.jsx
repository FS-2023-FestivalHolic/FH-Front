import styled from "styled-components";
import { NavLink, useLocation } from "react-router-dom";

export default function Navigation() {
  const location = useLocation();

  return (
    <Nav>
      <StyledLink to="/" isActive={location.pathname === '/'}>Main</StyledLink>
      <StyledLink to="/beer" isActive={location.pathname === '/beer'}>수제맥주</StyledLink>
      <StyledLink to="/test" isActive={location.pathname === '/test'}>맥주 테스트</StyledLink>
    </Nav>
  );
};


const Nav = styled.nav`
  max-width: 1075px;
  margin: 0 auto;
  padding: 24px 0;
  display: flex;
  justify-content: flex-start;
  gap: 20px;
`;

const StyledLink = styled(NavLink)`
  text-decoration: none;
  white-space: nowrap;
  font-size: 20px;
  font-weight: 400;
  color: #666666;

  &:hover {
    color: #1E1E1E;
  }

  &.active, &.custom-active {
    color: #1E1E1E;
    text-decoration: underline;
  }
  
  @media (max-width: 390px) {
    ${({ isActive }) => !isActive && `
      display: none;
    `}

    &.active, &.custom-active {
      text-decoration: none;
    }
  }
`;