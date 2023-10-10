import styled from "styled-components";
import Navigation from "../shared/Navigation";

const Main = () => {
  return(
    <Wrapper>
      <Navigation />
    </Wrapper>  
  );
};
  
const Wrapper = styled.div`
  max-width: 1075px;
  margin: 0 auto;
`;
export default Main;