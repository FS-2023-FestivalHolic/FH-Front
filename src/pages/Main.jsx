import styled from "styled-components";
import Navigation from "../shared/Navigation";
import MainImg from "../assets/mainImg.png";

const Main = () => {
  return(
    <Wrapper>
      <Navigation />
      <MainBanner>
        <img src={MainImg} alt="From Grain to Galss"/>
      </MainBanner>
    </Wrapper>  
  );
};
  
const Wrapper = styled.div`
  max-width: 1075px;
  margin: 0 auto;
`;

const MainBanner = styled.div`
  margin: 24px 0;
`;
export default Main;