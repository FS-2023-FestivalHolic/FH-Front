import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import BeerItem from "../components/BeerItem";
import Navigation from "../shared/Navigation";
import TagSlide from '../components/TagSlide';
import { Link } from "react-router-dom";
import axios from 'axios';
import HashtagBox from '../components/HashtagBox';

const api = axios.create({
  baseURL: 'http://3.34.177.220:8083', 
});

const List = () => {
  const [tags, setTags] = useState([]);
  const [selectTags, setSelectTags] = useState([]);
  const [sortedItems, setSortedItems] = useState([]);
  const [sortBy, setSortBy] = useState('id');

  // hashTag
  useEffect(()=>{
    async function fetchTagData() {
      try {
        const response = await api.get(`/api/hashTags`);
        if (response) {
          setTags(response.data.data);
        }
      } catch (error) {
        console.error('API 호출 중 에러 발생:', error);
      }
    }
    fetchTagData();
  }, []);

  // beer
  useEffect(()=>{
    async function fetchBeerData() {
      try {
        if (selectTags.length === 0) {
          const response = await api.get(`/api/beers`);
          if (response) {
            setSortedItems(response.data.data);
          }
        } else {
            const response = await api.get(`/api/beers/hashTags`, {
              params: {
                hashTagIds: selectTags.map(tag => tag.id).join(',')
              }
            });
            if (response) {
              setSortedItems(response.data.data);
            }
        }
      } catch (error) {
        console.error('API 호출 중 에러 발생:', error);
      }
    }
    fetchBeerData();
  }, [selectTags]);

  useEffect(() => {
    if (sortBy === 'likes' || sortBy === 'name') {
      fetchSortedItems(sortBy);
    }
  }, [sortBy]); 

  const fetchSortedItems = (sortType) => {
    axios.get(`/api/beers/${sortType}`)
      .then(response => setSortedItems(response.data.data))
      .catch(error => console.error('API 호출 중 에러 발생:', error));
  };

  const handleSort = (sortType) => {
    setSortBy(sortType);
  };

  const addHashtag = (tag) => {
    if(!selectTags.includes(tag)) {
      setSelectTags([...selectTags, tag]);
    }
  };

  const removeTag = (tag) => {
    setSelectTags(selectTags.filter((selectTag) => selectTag !== tag));
  }; 

  return (
    <Wrapper> 
      <Navigation />
      <TagSlide items={tags} addHashtag={addHashtag}/>
      <HashtagBox tags={selectTags} removeTag={removeTag} />
      <SortOptions>
        <SortButton onClick={() => handleSort('name')}>가나다순</SortButton>
        <Bar>|</Bar>
        <SortButton onClick={() => handleSort('likes')}>좋아요순</SortButton>
      </SortOptions>

      <ItemContainer>
        {sortedItems.map((beer, index) => (
          <Link to={`/beer/${beer.beerId}`} key={index} style={{ textDecoration: "none"}}>
            <BeerItem item={beer} />
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

  &:hover {
    color: #666;
  }
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
  margin-bottom: 20px;

  @media (max-width: 391px) {
    width: 370px;
    grid-template-columns: repeat(2,1fr);
    grid-gap: 8px;
    margin: 14px auto;
    object-fit: cover;
  }
`;

export default List;