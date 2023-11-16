import React, { useState, useRef } from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";
import BeerItem from './BeerItem';

const BeerSlideMobile = ({items}) => {
  const containerRef = useRef(null);
  const [startX, setStartX] = useState(null);
  const [isDrag, setIsDrag] = useState(false);
  
  const onDragStart = e => {
    e.preventDefault();
    setIsDrag(true);
    setStartX(e.pageX + containerRef.current.scrollLeft);
  };
  const onDragEnd = () => {
    setIsDrag(false);
  }
  const onDragMove = e => {
    if(isDrag) {
      const {scrollWidth, clientWidth, scrollLeft} = containerRef.current;
      containerRef.current.scrollLeft = startX - e.pageX;
      if (scrollLeft === 0) {
        setStartX(e.pageX); 
      } else if (scrollWidth <= clientWidth + scrollLeft) {
        setStartX(e.pageX + scrollLeft); 
      }
    }
  }

  const throttle = (func, ms) => {
    let throttled = false;
    return (...args) => {
      if (!throttled) {
        throttled = true;
        setTimeout(() => {
          func(...args);
          throttled = false;
        }, ms);
      }
    };
  };

  const delay = 50;
  const onThrottleDragMove = throttle(onDragMove, delay);

  return (
    <div>
      {items && (
        <SlideContainer
          ref={containerRef}
          onMouseDown={onDragStart}
          onMouseUp={onDragEnd}
          onMouseLeave={onDragEnd}
          onMouseMove={isDrag ? onThrottleDragMove : null}
        >
          <SlideItem>
            {items.map((item, index) => (
              <Link to={`/beer/${item.id}`} key={index}  style={{ textDecoration: "none"}}>
                <BeerItem item={item} />
              </Link>
            ))}
          </SlideItem>
        </SlideContainer>
      )}
    </div>
  );
};

const SlideContainer = styled.div`
  display: flex;
  overflow: hidden;
  width: 390px; 
  height: 220px;
  margin-bottom: 20px;
`;

const SlideItem= styled.div`
  display: flex;
  gap: 5px;
`;

export default BeerSlideMobile; 