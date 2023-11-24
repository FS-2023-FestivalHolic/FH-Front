import React, { useState, useRef, useEffect } from 'react';
import styled from "styled-components";
import HashtagBox from './HashtagBox';

const TagSlide = ({items}) => {
  const containerRef = useRef(null);
  const [startX, setStartX] = useState(null);
  const [isDrag, setIsDrag] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 390);
  const [selectTags, setSelectTags] = useState([]);
  
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
  
  // 태그 드래그
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

  const addHashtag = (tag) => {
    if(!selectTags.includes(tag)) {
      setSelectTags([...selectTags, tag]);
    }
  };

  const removeTag = (tag) => {
    setSelectTags(selectTags.filter((selectTag) => selectTag !== tag));
  }; 

  return (
    <div> {isMobile ? <>
        {items && (
          <SlideContainer
            ref={containerRef}
            onMouseDown={onDragStart}
            onMouseUp={onDragEnd}
            onMouseLeave={onDragEnd}
            onMouseMove={isDrag ? onThrottleDragMove : null}
          >
            <SlideItem>
              {items.map((item) => (
                <div>
                  <HashTag key={item.id} onClick={() => addHashtag(item)}>
                    {item.hashTagName}
                  </HashTag>
                  {item.id < items.length - 1 && <span>|</span>}
                </div>
              ))}
            </SlideItem>
          </SlideContainer>
        )} 
      </> : 
      <HashtagsContainer>
        {items.map((tag) => (
          <div>
            <HashTag key={tag.id} onClick={() => addHashtag(tag)}>
              {tag.hashTagName}
            </HashTag>
            {tag.id < items.length - 1 && <span>|</span>}
          </div>
        ))}
      </HashtagsContainer>
    }
      
      <HashtagBox tags={selectTags} removeTag={removeTag} />
    </div>
  );
};

const SlideContainer = styled.div`
  display: flex;
  overflow: hidden;
  width: 390px; 
  margin-bottom: 20px;
  white-space: nowrap;
`;

const SlideItem= styled.div`
  display: flex;
  flex-wrap: nowrap;
  gap: 7px;
  color: #666;
  font-size: 15px;
  font-weight: 400;
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