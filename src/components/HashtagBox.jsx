import styled from "styled-components";

const HashtagBox = ({ tags, removeTag }) => {
  return (
    <Container>
      {tags.map((tag) => (
        <TagSection key={tag.id}>
          <TagTitle>{tag.hashTagName}</TagTitle>
          <RemoveButton onClick={() => removeTag(tag)}>
            X
          </RemoveButton>
        </TagSection>
      ))}
    </Container>
  );
};

const Container = styled.div`
  height: 28px;
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 22px;
`;

const TagSection = styled.div`
  height: 28px;
  margin: 0;
  background-color: #D9D9D9;
  border-radius: 4px;
`;

const TagTitle = styled.span`
  height: 100%;
  padding: 3px 10px;  
  font-weight: 400;
  font-size: 15px;
  color: #666;
`;

const RemoveButton = styled.button`
  width: 24px;
  height: 100%;
  background-color: #B3B3B3;
  color: #666;
  border-radius: 0 4px 4px 0;
  padding: 3px;
  border:none;
  cursor: pointer;
`;

export default HashtagBox;