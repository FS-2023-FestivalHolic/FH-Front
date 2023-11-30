import React, { useState, useRef } from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";
import BeerItem from './BeerItem';

const BeerSlideMobile = ({items}) => {
  const containerRef = useRef(null);
  const [startX, setStartX] = useState(null);
  const [isDrag, setIsDrag] = useState(false);

  const onDragStart = (e) => {
    setIsDrag(true);
    setStartX(e.touches ? e.touches[0].pageX + containerRef.current.scrollLeft : e.pageX + containerRef.current.scrollLeft);
  };

  const onDragEnd = () => {
    setIsDrag(false);
  };

  const onDragMove = (e) => {
    if (isDrag) {
      const { scrollWidth, clientWidth, scrollLeft } = containerRef.current;
      const pageX = e.touches ? e.touches[0].pageX : e.pageX;
      containerRef.current.scrollLeft = startX - pageX;

      if (scrollLeft === 0 && pageX > startX) {
        setStartX(pageX);
      } else if (scrollWidth <= clientWidth + scrollLeft && pageX < startX) {
        setStartX(pageX + scrollLeft);
      }
    }
  };

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
          onTouchStart={onDragStart}
          onTouchEnd={onDragEnd}
          onTouchMove={onThrottleDragMove}
          passive={false}
        >
          <SlideItem>
            {items.map((item, index) => (
              <Link to={`/beer/${item.beerId}`} key={index} style={{ textDecoration: 'none' }}>
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
  overflow: hidden;
  white-space: nowrap;
  cursor: grab;
  touch-action: none;
`;

const SlideItem= styled.div`
  display: flex;
  gap: 5px;
  outline: none;
  white-space: normal;
`;

export default BeerSlideMobile; 