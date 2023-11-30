import React, { useState, useRef, useEffect } from 'react';
import styled from "styled-components";

const TagSlide = ({items, addHashtag}) => {
  const containerRef = useRef(null);
  const [startX, setStartX] = useState(null);
  const [isDrag, setIsDrag] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 390);
  
  // 모바일용일 때 태그 슬라이드로 전환
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 390);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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
    <div> {isMobile ? <>
          <SlideContainer
            ref={containerRef}
            onTouchStart={onDragStart}
            onTouchEnd={onDragEnd}
            onTouchMove={onThrottleDragMove}
            passive={false}
          >
            <SlideItem>
              {items.map((item, index) => (
                <div key={index}>
                  <HashTag onClick={() => addHashtag(item)}>
                    {item.hashTagName}
                  </HashTag>
                  {item.id < items.length && <span>|</span>}
                </div>
              ))}
            </SlideItem>
          </SlideContainer>
      </> : 
      <HashtagsContainer>
        {items.map((tag, index) => (
          <div key={index}>
            <HashTag onClick={() => addHashtag(tag)}>
              {tag.hashTagName}
            </HashTag>
            {tag.id < items.length && <span>|</span>}
          </div>
        ))}
      </HashtagsContainer>
    }
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
  flex-wrap: nowrap;
  gap: 7px;
  color: #666;
  font-size: 15px;
  font-weight: 400;
  outline: none;
`;

const HashTag = styled.span`
  padding: 5px;
  cursor: pointer;
  margin-right: 7px;
`; 

const HashtagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap:15px;
  color: #666;
  font-size: 15px;
  font-weight: 400;
`;

export default TagSlide; 