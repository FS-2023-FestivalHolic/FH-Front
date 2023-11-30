import styled from "styled-components";
import LikeIcon from "../assets/heart.png";

const UserBeerItem = ({item}) => {
  return (
    <Container>
      <ImgContainer>
        <ItemImage src={item.beerImage} alt={item.beerName} />
      </ImgContainer>
      <Description>
        <ItemName>{item.beerName}</ItemName>
        <ItemLikes>
          <Icon src={LikeIcon} alt="좋아요" />
          {item.likesCnt}
        </ItemLikes>
      </Description>
    </Container>
  );
};

const Container = styled.div`
  display: block;
  width: 262px;
  height: 321px;
  font-weight: 700;
  background-color: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  border-radius: 5px 5px 0 0;

  @media (max-width: 391px) {
    width: 178px;
    height: 218px;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);
    border-radius: 3.5px 3.5px 0 0;
  }
`;

const ImgContainer = styled.div`
  width: 262px;
  height: 234px;
  overflow: hidden;
  border-radius: 5px 5px 0 0;  
  
  @media (max-width: 391px) {
    width: 178px;
    height: 157px;
    border-radius: 3.5px 3.5px 0 0;
  }
`

const ItemImage = styled.img`
  width: 100%;
  object-fit: fill;
`;

const Description = styled.div`
  display: grid;
  padding: 15px;
  gap: 15px;

  @media (max-width: 391px) {
    padding: 8px 10px;
    gap: 5px;
  }
`;

const ItemName = styled.div`
  font-size: 15px;
  color: #000000;

  @media (max-width: 391px) {
    font-size:13.5px;
  }
`;

const ItemLikes = styled.div`
  font-size: 11px;
  display: flex;
  align-items: center;
  color: #000000;

  @media (max-width: 391px) {
    font-size:10px;
  }
`;

const Icon = styled.img`
  margin-right: 5px;
`;

export default UserBeerItem;