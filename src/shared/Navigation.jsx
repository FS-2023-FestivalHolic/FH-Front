import styled from "styled-components";
import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <Nav>
      <StyledLink to="/">Main</StyledLink>
      <StyledLink to="/beer">수제맥주</StyledLink>
      <StyledLink to="/test">맥주 테스트</StyledLink>
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

  &.active {
    color: #1E1E1E;
    text-decoration: underline;
  }
`;