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
`;

const ItemImage = styled.img`
  max-width: 100%;
  height: 228px;
  border-radius: 5px 5px 0 0;
`;

const Description = styled.div`
  display: grid;
  padding: 7px;
  gap: 7px;
`;

const ItemName = styled.div`
  font-size: 15px;
  color: #000000;
`;

const ItemLikes = styled.div`
  font-size: 11px;
  display: flex;
  align-items: center;
  color: #000000;
`;

const Icon = styled.img`
  margin-right: 5px;
  border-radius: 5px 5px 0 0;
`;

const HashTags = styled.div`
  display: flex;
  align-item: center;
  font-size: 11px;
  color: #666666;
`;

const HashTag = styled.span`
  margin-right: 5px;
`;

export default BeerItem;