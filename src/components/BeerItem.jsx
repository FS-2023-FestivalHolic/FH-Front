import styled from "styled-components";
import LikeIcon from "../assets/heart.png";

const BeerItem = ({item}) => {
  return (
    <Container>
      <ItemImage src={item.image} alt={item.name} />
      <Description>
        <ItemName>{item.name}</ItemName>
        <HashTags>
          {item.tags.map((tag, index) =>(
            <HashTag key={index}>{"#"}{tag}</HashTag>
          ))}
        </HashTags>
        <ItemLikes>
          <Icon src={LikeIcon} alt="좋아요" />
          {item.like}
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

  @media (max-width: 390px) {
    width: 178px;
    height: 218px;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);
    border-radius: 3.5px 3.5px 0 0;
  }
`;

const ItemImage = styled.img`
  max-width: 100%;
  height: 228px;
  border-radius: 5px 5px 0 0;
  objext-fit: cover;

  @media (max-width: 390px) {
    height: 155px;
    border-radius: 3.5px 3.5px 0 0;
  }
`;

const Description = styled.div`
  display: grid;
  padding: 7px;
  gap: 7px;

  @media (max-width: 390px) {
    padding: 0 10px;
    gap: 2px;
  }
`;

const ItemName = styled.div`
  font-size: 15px;
  color: #000000;

  @media (max-width: 390px) {
    font-size:13.5px;
  }
`;

const ItemLikes = styled.div`
  font-size: 11px;
  display: flex;
  align-items: center;
  color: #000000;

  @media (max-width: 390px) {
    font-size:10px;
  }
`;

const Icon = styled.img`
  margin-right: 5px;
`;

const HashTags = styled.div`
  display: flex;
  align-item: center;
  font-size: 11px;
  color: #666666;

  @media (max-width: 390px) {
    font-size:7.5px;
  }
`;

const HashTag = styled.span`
  margin-right: 5px;
`;

export default BeerItem;