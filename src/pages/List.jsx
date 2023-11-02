import React, { useState } from "react";
import styled from "styled-components";
import HashtagBox from "../components/HashtagBox";
import BeerItem from "../components/BeerItem";
import { Link } from "react-router-dom";

const List = () => {
  const tags = ["#달달함", "#부드러움", "#상큼함", "#깔끔함", "#쓴맛", "#쌉쌀함", "#과일향", "#새콤달콤"];
  const [selectTags, setSelectTags] = useState([]);

  const addHashtag = (tag) => {
    if(!selectTags.includes(tag)) {
      setSelectTags([...selectTags, tag]);
    }
  };

  const removeTag = (tag) => {
    setSelectTags(selectTags.filter((selectTag) => selectTag !== tag));
  }; 

  // 임시 맥주 데이터 사용
  const beerData = [
    {id: 1, image: require('../assets/FirstJuiceLarger.png'), name: '첫즙라거', like: 5, tags: ['달달함', '부드러움']},
    {id: 2, image: require('../assets/LemonRamalade.png'), name: '레몬라말레이드', like: 22, tags: ['달달함', '부드러움']},
    {id: 3, image: require('../assets/LargerOnTheBeach.png'), name: '라거 온 더 비치', like: 5, tags: ['달달함', '부드러움']},
    {id: 4, image: require('../assets/DarkLarger.png'), name: '다크 라거', like: 22, tags: ['달달함', '부드러움', '쓴맛']},
    {id: 5, image: require('../assets/LemonRamalade.png'), name: '레몬라말레이드', like: 22, tags: ['달달함', '부드러움']},
    {id: 6, image: require('../assets/LargerOnTheBeach.png'), name: '라거 온 더 비치', like: 5, tags: ['달달함', '부드러움']},
    {id: 7, image: require('../assets/DarkLarger.png'), name: '다크 라거', like: 22, tags: ['달달함', '부드러움', '쓴맛']},
    {id: 8, image: require('../assets/LemonRamalade.png'), name: '레몬라말레이드', like: 22, tags: ['달달함', '부드러움']},
    {id: 9, image: require('../assets/LargerOnTheBeach.png'), name: '라거 온 더 비치', like: 5, tags: ['달달함', '부드러움']},
    {id: 10, image: require('../assets/DarkLarger.png'), name: '다크 라거', like: 22, tags: ['달달함', '부드러움', '쓴맛']},
    {id: 11, image: require('../assets/LemonRamalade.png'), name: '레몬라말레이드', like: 22, tags: ['달달함', '부드러움']},
    {id: 12, image: require('../assets/LargerOnTheBeach.png'), name: '라거 온 더 비치', like: 5, tags: ['달달함', '부드러움']},
  ]; 

  return (
    <Wrapper> 
      <HashtagsContainer>
        {tags.map((tag, index) => (
          <div>
            <HashTag key={index} onClick={() => addHashtag(tag)}>
              {tag}
            </HashTag>
            {index < tags.length - 1 && <span>|</span>}
          </div>
        ))}
      </HashtagsContainer>

      <HashtagBox tags={selectTags} removeTag={removeTag} />
      
      <SortOptions>
        <SortButton>가나다순</SortButton>
        <Bar>|</Bar>
        <SortButton>좋아요순</SortButton>
      </SortOptions>

      <ItemContainer>
        {beerData.map((beer, index) => (
          <Link to={`/beer/${beer.id}`} style={{ textDecoration: "none"}}>
            <BeerItem key={index} item={beer} />
          </Link>
        ))}
      </ItemContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 1075px;
  margin: 0 auto;
`;

const HashtagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap:15px;
  color: #666;
  font-size: 15px;
  font-weight: 400;
  margin-top: 30px;
`;

const HashTag = styled.span`
  padding: 5px;
  cursor: pointer;
  margin-right: 15px;
`; 

const SortOptions = styled.div`
  display: flex;
  margin: 20px 0 30px;
  justify-content: flex-end;
`;

const SortButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 15px;
  font-weight: 400;
  color: #666666B0;
`;

const Bar = styled.span`
  color: #666666B0;
  margin: 0 12px;
`;

const ItemContainer = styled.div`
  max-width: 100%;
  justify-content:space-between;
  display: grid;
  grid-template-columns: repeat(4,1fr);
  grid-gap: 9px;
`;

export default List;