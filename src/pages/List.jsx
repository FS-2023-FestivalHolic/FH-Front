import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import BeerItem from "../components/BeerItem";
import Navigation from "../shared/Navigation";
import TagSlide from '../components/TagSlide';
import { Link } from "react-router-dom";
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://3.34.177.220:8083', 
});

const List = () => {
  const tags = ["#달달함", "#부드러움", "#상큼함", "#깔끔함", "#쓴맛", "#쌉쌀함", "#과일향", "#새콤달콤"];
  const [beerData, setBeerData] = useState([]);

  useEffect(()=>{
    async function fetchBeerData() {
      try {
        const response = await api.get(`/api/beers`);
        if (response) {
          setBeerData(response.data.data);
          console.log(response.data.data)
        }
      } catch (error) {
        console.error('API 호출 중 에러 발생:', error);
      }
    }
    fetchBeerData();
  }, []);

  return (
    <Wrapper> 
      <Navigation />
      <TagSlide items={tags}/>
      <SortOptions>
        <SortButton>가나다순</SortButton>
        <Bar>|</Bar>
        <SortButton>좋아요순</SortButton>
      </SortOptions>

      <ItemContainer>
        {beerData.map((beer) => (
          <Link to={`/beer/${beer.beerId}`} style={{ textDecoration: "none"}}>
            <BeerItem key={beer.beerId} item={beer} />
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

  @media (max-width: 390px) {
    width: 370px;
    grid-template-columns: repeat(2,1fr);
    grid-gap: 8px;
    margin: 14px auto;
    object-fit: cover;
  }
`;

export default List;