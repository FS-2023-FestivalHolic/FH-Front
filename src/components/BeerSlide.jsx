import React, { useState } from "react";
import BeerItem from "./BeerItem";
import { Link } from "react-router-dom";
import styled from "styled-components";
import RightBtn from "../assets/right.png";
import LeftBtn from "../assets/left.png";

const BeerSlide = ({items}) => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage= 4;  // 한 번에 아이템 4개씩 보여짐
  const totalItems = items.length;

  // 전체 아이템을 페이지 단위로 나누기
  const startIndex = currentPage * itemsPerPage;
  const endIndex = (startIndex + itemsPerPage) % totalItems;
  const currentItems = startIndex < endIndex
  ? items.slice(startIndex, endIndex)
  : [...items.slice(startIndex), ...items.slice(0, endIndex)];

  // 데이터가 4개 초과일 때만 버튼이 보이도록
  const showButtons = items.length > itemsPerPage;

  // 이전 페이지로 이동
  const goToNextPage = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % Math.ceil(items.length / itemsPerPage));
  };

  const goToPrevPage = () => {
    setCurrentPage((prevPage) => (prevPage - 1 + Math.ceil(items.length / itemsPerPage)) % Math.ceil(items.length / itemsPerPage));
  };

  return (
    <SlideList>
      {currentItems.map((item, index) => (
        <Slide>
          <Link to={`/beer/${item.id}`} key={index}  style={{ textDecoration: "none"}}>
          <BeerItem item={item} />
          </Link>
        </Slide>
      ))}

      {showButtons && (
        <SlideBtn>
          <PrevButton onClick={goToPrevPage}>
            <img src={LeftBtn} alt="left" />
          </PrevButton>
          <NextButton onClick={goToNextPage}>
            <img src={RightBtn} alt="right" />
          </NextButton>
        </SlideBtn>
      )}
    </SlideList>
  );
};

const SlideList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 6px;
  position: relative;
  overflow: hidden;
`;

const Slide = styled.div`
  box-sizing: border-box;
  margin-bottom: 10px;
`

const SlideBtn = styled.div`
  display: flex;
  max-width: 100%;
  justify-content: space-between;
`;

const Button = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const PrevButton = styled(Button)`
  left: 0;
`;

const NextButton = styled(Button)`
  right: 0;
  margin-right: 2px;
`;

export default BeerSlide;