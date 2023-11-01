import React, { useState } from "react";
import styled from "styled-components";
import HashtagBox from "../components/HashtagBox";

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


export default List;